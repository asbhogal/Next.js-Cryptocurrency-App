import { test, expect } from "@playwright/test";

test("should navigate to main dashboard on first render", async ({ page }) => {
  await page.goto("/");
});

test("should navigate from dashboard to cryptocurrencies using header", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: "cryptocurrencies" }).click();
  await expect(page).toHaveURL("/crypto-currencies");
});
