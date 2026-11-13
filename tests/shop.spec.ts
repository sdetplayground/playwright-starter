import { test, expect } from '@playwright/test';

test('the shop opens', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/SDET Playground Shop/);
});

test('the shop shows the coffee mug', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Ceramic Coffee Mug' })).toBeVisible();
});
