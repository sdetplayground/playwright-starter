import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: 'html',
  use: {
    baseURL: process.env.SHOP_URL ?? 'https://sdetplayground-shop.com',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
