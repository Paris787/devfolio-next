import { test, expect } from '@playwright/test';

test.describe('用户核心流程', () => {
    test('首页显示标题', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('h1')).toContainText('你好，我是Vigrombe');
    });

    test('博客列表和详情页', async ({ page }) => {
        await page.goto('/blog');
        await page.click('text=开始学习 HTML');
        await expect(page.locator('h1')).toContainText('开始学习 HTML');
        await page.click('text=返回博客列表');
        await expect(page.locator('h1')).toContainText('博客文章');
    });

    test('联系表单验证', async ({ page }) => {
        await page.goto('/contact');
        await page.click('button[type="submit"]');
        await expect(page.locator('text=请输入姓名')).toBeVisible();
        await page.fill('#name', '测试用户');
        await page.fill('#email', 'invalid-email');
        await page.fill('#message', '测试留言');
        await page.click('button[type="submit"]');
        await expect(page.locator('text=邮箱格式不正确')).toBeVisible();
        await page.fill('#email', 'test@example.com');
        await page.click('button[type="submit"]');
        // 注意：实际提交会调用 /api/contact，但 E2E 环境中可能没有后端，这里我们只测前端验证
        // 可以 mock 或检查不报错
        await expect(page.locator('text=感谢你的留言')).toBeVisible({ timeout: 5000 });
    });
});