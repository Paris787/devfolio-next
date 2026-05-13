import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../../src/contexts/ThemeContext';
import ThemeToggle from '../../src/components/ThemeToggle/ThemeToggle';

// 模拟 localStorage
const localStorageMock = (() => {
    let store = {};
    return {
        getItem: vi.fn(key => store[key] || null),
        setItem: vi.fn((key, value) => { store[key] = value; }),
        clear: vi.fn(() => { store = {}; }),
    };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('ThemeToggle', () => {
    beforeEach(() => {
        localStorageMock.clear();
        document.documentElement.removeAttribute('data-theme');
    });

    it('应该渲染切换按钮', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const btn = screen.getByRole('button', { name: /切换主题/ });
        expect(btn).toBeInTheDocument();
    });

    it('点击应切换主题属性', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const btn = screen.getByRole('button', { name: /切换主题/ });
        // 默认暗色
        expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
        fireEvent.click(btn);
        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    });

    it('应保存主题到 localStorage', () => {
        render(
            <ThemeProvider>
                <ThemeToggle />
            </ThemeProvider>
        );
        const btn = screen.getByRole('button', { name: /切换主题/ });
        fireEvent.click(btn);
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    });
});