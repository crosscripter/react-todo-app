import { test, expect } from '@playwright/test';

test('should add and complete a todo item', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Ensure your app is running

  // Add a new todo
  await page.fill('input[type=text]', 'Learn Playwright');
  await page.click('button[type="submit"]');

  // Verify the todo was added
  await expect(page.locator('text=Learn Playwright')).toBeVisible();

  // Mark it as complete
  await page.click('input[type=checkbox]');

  // Verify the todo is marked as completed
  await expect(page.locator('text=Learn Playwright')).toHaveCSS('text-decoration', /^line-through/);
});
