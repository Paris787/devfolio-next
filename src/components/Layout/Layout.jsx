import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BackToTop from '../BackToTop/BackToTop';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <a href="#main-content" style={{
                position: 'absolute',
                top: '-40px',
                left: 0,
                background: 'var(--color-primary)',
                color: 'white',
                padding: '0.5rem',
                zIndex: 999,
                textDecoration: 'none',
            }} onFocus={e => { e.currentTarget.style.top = '0'; }}
               onBlur={e => { e.currentTarget.style.top = '-40px'; }}>
                跳到主要内容
            </a>
            <Header />
            <main className={styles.main} id="main-content">{children}</main>
            <Footer />
            <BackToTop />
        </>
    );
}