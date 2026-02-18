const { test, expect } = require("@playwright/test");
const fs = require("fs");

test("screenshot", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/sampleapp");
  await page.locator("body").screenshot({ path: "body.png" });
  await page.locator(".container").first().screenshot({ path: "container.png" });

  expect(fs.existsSync("body.png")).toBe(true);
  expect(fs.existsSync("container.png")).toBe(true);
});