import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useSearch } from '../../contexts/SearchContext';
import styles from './SearchModal.module.css';

export default function SearchModal() {
    const { isSearchOpen, closeSearch } = useSearch();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [allPosts, setAllPosts] = useState([]);
    const router = useRouter();
    const inputRef = useRef(null);

    useEffect(() => {
        if (isSearchOpen) {
            // 每次打开搜索框时，从 API 获取文章列表（可缓存）
            fetch('/api/posts')
                .then(res => res.json())
                .then(posts => {
                    setAllPosts(posts);
                    setQuery('');
                    setResults([]);
                })
                .catch(console.error);
            // 延迟聚焦，确保 modal 已渲染
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isSearchOpen]);

    useEffect(() => {
        if (!query.trim()) {
            setResults([]);
            return;
        }
        const filtered = allPosts.filter(post =>
            post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.summary.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
    }, [query, allPosts]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeSearch();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [closeSearch]);

    if (!isSearchOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) closeSearch();
    };

    const handleResultClick = (slug) => {
        closeSearch();
        router.push(`/blog/${slug}`);
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <div className={styles.inputWrapper}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="搜索文章..."
                        className={styles.input}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="搜索文章"
                    />
                </div>
                <div className={styles.results}>
                    {results.length === 0 && query.trim() && (
                        <p className={styles.empty}>没有找到匹配的文章</p>
                    )}
                    {results.map(post => (
                        <div key={post.slug} className={styles.resultItem}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleResultClick(post.slug);
                                }}
                                className={styles.resultLink}
                            >
                                <div className={styles.resultTitle}>{post.title}</div>
                                <div className={styles.resultSummary}>{post.summary}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}