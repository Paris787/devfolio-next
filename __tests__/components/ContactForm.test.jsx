import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactForm from '../../src/components/ContactForm/ContactForm';

// Mock 全局 fetch
global.fetch = vi.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
);

// Mock toast 模块
vi.mock('../../src/components/Toast/Toast', () => ({
    showToast: vi.fn(),
}));

describe('ContactForm', () => {
    it('应该渲染姓名、邮箱、留言输入框和发送按钮', () => {
        render(<ContactForm />);
        expect(screen.getByLabelText(/姓名/)).toBeInTheDocument();
        expect(screen.getByLabelText(/邮箱/)).toBeInTheDocument();
        expect(screen.getByLabelText(/留言/)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /发送/ })).toBeInTheDocument();
    });
});