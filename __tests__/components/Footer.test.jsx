import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer/Footer';

describe('Footer', () => {
    it('应该显示版权信息', () => {
        render(<Footer />);
        expect(screen.getByText(/Vigrombe/)).toBeInTheDocument();
    });
});