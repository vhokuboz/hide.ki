import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders the hero section with title", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("hide.ki");
  });

  test("navigates to blog page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "blog" }).first().click();
    await expect(page).toHaveURL("/blog");
    await expect(page.locator("h2")).toContainText("todos os posts");
  });

  test("shows latest posts section", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("text=posts recentes")).toBeVisible();
  });
});

test.describe("Blog page", () => {
  test("renders all posts", async ({ page }) => {
    await page.goto("/blog");
    const posts = page.locator("article");
    const count = await posts.count();
    expect(count).toBeGreaterThan(0);
  });
});

test.describe("About page", () => {
  test("renders about page", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveURL("/about");
  });
});
