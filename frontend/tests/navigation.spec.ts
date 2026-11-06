import { test, expect } from '@playwright/test';

test('opens class ratings from the homepage', async ({ page }) => {
  await page.goto('/');

  await page
    .getByRole('link', { name: 'View class ratings', exact: true })
    .first()
    .click();

  await expect(page).toHaveURL(/\/ratings$/);
});

test('go back to search page from ratings page', async({ page }) =>{
  await page.goto('/ratings');

  await page
    .getByRole('link', {name: 'All classes', exact: true})
    .first()
    .click()

  await expect(page).toHaveURL(/\/$/);
});

test('go to professor view from students view', async({ page }) =>{
  await page.goto('/ratings');

  await page
    .getByRole('link', {name: 'Professor view', exact: true})
    .first()
    .click()

  await expect(page).toHaveURL(/\/ratings\/professor$/);
});

test('go to student view from professor view', async({ page }) =>{
  await page.goto('/ratings/professor');

  await page
    .getByRole('link', {name: 'Student view', exact: true})
    .first()
    .click()

  await expect(page).toHaveURL(/\/ratings$/);
});

test('student view Rate this class button opens the popup and the x button closes it', async ({ page }) => {
  await page.goto('/ratings');

  await page
    .getByRole('button', { name: 'Rate this class' })
    .click();

  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('button', { name: 'Close dialog' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
});

test('professor view add a comment opens the popup and the x button closes it', async ({ page }) => {
  await page.goto('/ratings/professor');

  await page
    .getByRole('button', { name: 'Add a comment' })
    .click();

  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('button', { name: 'Close dialog' }).click();
  await expect(page.getByRole('dialog')).toBeHidden();
});