import { expect, test } from "playwright/test";

test("renders the QAFlow foundation page", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  await expect(page.getByRole("heading", { name: "QAFlow" })).toBeVisible();
  await expect(page.getByText("Modern QA Test Management Platform")).toBeVisible();
});
