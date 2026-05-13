import React from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">首页</Link></li>
                <li><Link href="/about">关于</Link></li>
                <li><Link href="/blog">博客</Link></li>
                <li><Link href="/portfolio">作品</Link></li>
                <li><Link href="/contact">联系</Link></li>
            </ul>
        </nav>
    );
}