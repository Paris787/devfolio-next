import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './BlogList.module.css';

export default function BlogList({ posts: initialPosts }) {
    const [search, setSearch] = useState('');
    const [activeTag, setActiveTag] = useState('全部');

    const tags = useMemo(() => {
        const tagSet = new Set();
        initialPosts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)));
        return ['全部', ...tagSet];
    }, [initialPosts]);

    const filteredPosts = useMemo(() => {
        return initialPosts.filter(post => {
            const matchTag = activeTag === '全部' || post.tags.includes(activeTag);
            const matchSearch = !search.trim() ||
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.summary.toLowerCase().includes(search.toLowerCase());
            return matchTag && matchSearch;
        });
    }, [initialPosts, activeTag, search]);

    return (
        <div>
            <div className={styles.filterBar}>
                <input
                    type="search"
                    placeholder="搜索文章..."
                    className={styles.searchInput}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <ul className={styles.tagList}>
                    {tags.map(tag => (
                        <li key={tag}>
                            <button
                                className={`${styles.tagBtn} ${tag === activeTag ? styles.activeTag : ''}`}
                                onClick={() => setActiveTag(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {filteredPosts.length === 0 ? (
                <p className={styles.emptyState}>没有找到匹配的文章。</p>
            ) : (
                filteredPosts.map(post => (
                    <article key={post.slug} className={styles.article}>
                        <h2>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>发布时间：{post.date}</p>
                        <p>{post.summary}</p>
                        <div>
                            {post.tags.map(tag => (
                                <span key={tag} className={styles.tagInline}>{tag}</span>
                            ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>阅读全文</Link>
                    </article>
                ))
            )}
        </div>
    );
}