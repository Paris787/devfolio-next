import { describe, it, expect } from 'vitest';
import { getAllPosts } from '../../src/lib/posts';

describe('getAllPosts', () => {
    it('应该返回至少一篇文章', () => {
        const posts = getAllPosts();
        expect(posts.length).toBeGreaterThan(0);
    });

    it('每篇文章应包含必要的字段', () => {
        const posts = getAllPosts();
        posts.forEach(post => {
            expect(post).toHaveProperty('slug');
            expect(post).toHaveProperty('title');
            expect(post).toHaveProperty('date');
            expect(post).toHaveProperty('tags');
            expect(post).toHaveProperty('summary');
        });
    });

    it('文章应按日期降序排列', () => {
        const posts = getAllPosts();
        for (let i = 0; i < posts.length - 1; i++) {
            expect(new Date(posts[i].date).getTime()).toBeGreaterThanOrEqual(
                new Date(posts[i + 1].date).getTime()
            );
        }
    });

    it('slug 应该从文件名正确生成', () => {
        const posts = getAllPosts();
        const slugs = posts.map(p => p.slug);
        expect(slugs).toContain('getting-started');
        expect(slugs).toContain('css-basics');
    });
});