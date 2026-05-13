import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BackToTop from '../../src/components/BackToTop/BackToTop';

describe('BackToTop', () => {
    it('应该渲染回到顶部按钮', () => {
        render(<BackToTop />);
        const btn = screen.getByRole('button', { name: /回到顶部/ });
        expect(btn).toBeInTheDocument();
    });
});