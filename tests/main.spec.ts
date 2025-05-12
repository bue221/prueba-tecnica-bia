import { expect, test } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test('change theme', async ({ page }) => {
  await page.goto(BASE_URL);

  // Click the theme toggle button
  const themeToggleButton = page.locator('button[aria-label="Toggle theme"]');
  await themeToggleButton.click();
  // clic to element with id 'dark-option'
  const darkOption = page.locator('#dark-option');
  await darkOption.click();
  // Wait for the theme to change
  await page.waitForTimeout(1000); // Adjust the timeout as needed  

  // Verify the theme has changed (e.g., by checking the body class or style)
  const html = page.locator('html');
  await expect(html).toHaveClass(/dark/);
});

test('search for a specific country', async ({ page }) => {
  await page.goto(BASE_URL);

  // Type a country name in the search input
  const searchInput = page.locator('input[placeholder="Search for a country..."]');
  await searchInput.fill('Germany');

  // Verify the country card for Germany is visible
  const countryCard = page.locator('text=Germany');
  await expect(countryCard).toBeVisible();
});

test('filter by region', async ({ page }) => {
  await page.goto(BASE_URL);

  // Open the region filter dropdown and select a region
  const regionDropdown = page.locator('button[aria-label="Filter by Region"]');
  await regionDropdown.click();
  const regionOption = page.locator('text=Asia');
  await regionOption.click();

  // Verify countries from the selected region are displayed
  const countryCard = page.locator('text=Japan');
  await expect(countryCard).toBeVisible();
});

test('navigate to country detail', async ({ page }) => {
  await page.goto(BASE_URL);

  // Click on a country card
  const countryCard = page.locator('text=Germany');
  await countryCard.click();

  // Wait for the detail page to load
  await page.waitForSelector('h1[aria-label="Country Name"]');
  // Verify the URL contains the country name
  await expect(page).toHaveURL(/.*\/country\/Germany/);

  // Verify the detail page is displayed
  const detailHeading = page.locator('h1[aria-label="Country Name"]');
  await expect(detailHeading).toHaveText('Germany');
});

test('return to home from detail', async ({ page }) => {
  await page.goto(BASE_URL);

  // Navigate to a country detail page
  const countryCard = page.locator('text=Germany');
  await countryCard.click();

  // Wait for the detail page to load
  await page.waitForSelector('h1[aria-label="Country Name"]');

  // Click the back button
  const backButton = page.locator('a[aria-label="Back"]');
  await backButton.click();

  // Verify the home page is displayed
  const searchInput = page.locator('input[placeholder="Search for a country..."]');
  await expect(searchInput).toHaveValue('');
});
