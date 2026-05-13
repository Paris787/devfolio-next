import { useRouter } from 'next/router';
import styles from './Header.module.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Navigation from '../Navigation/Navigation';
import { useSearch } from '../../contexts/SearchContext';

export default function Header() {
    const router = useRouter();
    const { openSearch } = useSearch();

    const handleLogoClick = () => {
        router.push('/');
    };

    return (
        <header className={styles.header}>
            <button
                className={styles.logo}
                onClick={handleLogoClick}
                aria-label="回到首页"
            >
                桃蹊 DevSpace
            </button>
            <div className={styles.headerRight}>
                <button
                    className={styles.searchBtn}
                    onClick={openSearch}
                    aria-label="搜索"
                >
                    🔍
                </button>
                <button
                    className={styles.hamburger}
                    aria-label="菜单"
                    onClick={() => {
                        const nav = document.querySelector('nav');
                        nav?.classList.toggle('nav-open');
                    }}
                >
                    &#9776;
                </button>
                <ThemeToggle />
            </div>
            <Navigation />
        </header>
    );
}