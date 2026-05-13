import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { SearchProvider } from '../../src/contexts/SearchContext';
import SearchModal from '../../src/components/SearchModal/SearchModal';

// 模拟 next/router
vi.mock('next/router', () => ({
    useRouter: vi.fn(() => ({
        push: vi.fn(),
        pathname: '/',
        asPath: '/',
    })),
}));

// 模拟 lib/posts（避免加载真实模块）
vi.mock('../../src/lib/posts', () => ({
    getAllPosts: vi.fn(() => []),
}));

describe('SearchModal', () => {
    it('不应该在初始状态下渲染任何内容（isSearchOpen 为 false）', () => {
        const { container } = render(
            <SearchProvider>
                <SearchModal />
            </SearchProvider>
        );
        // 未打开时组件返回 null，DOM 中不应有搜索弹窗的类名
        expect(container.querySelector('[class*="overlay"]')).toBeNull();
    });
});