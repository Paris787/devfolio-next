import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={styles.toggleBtn}
            onClick={toggleTheme}
            aria-label="切换主题"
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}