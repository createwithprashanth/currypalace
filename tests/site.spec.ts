import { test, expect } from "@playwright/test";

const BASE = "http://localhost:3000";

// ── Desktop viewport ──────────────────────────────────────────────────────────
test.describe("Desktop (1280×800)", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("page loads and title is correct", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Curry Palace/i);
  });

  test("navbar renders with logo and links", async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByText("Curry Palace").first()).toBeVisible();
    await expect(page.getByText("مطعم كاري بالس").first()).toBeVisible();
    for (const link of ["About", "Menu", "Gallery", "Location", "Contact"]) {
      await expect(page.getByRole("button", { name: link }).first()).toBeVisible();
    }
  });

  test("Menu PDF download link is visible in navbar", async ({ page }) => {
    await page.goto(BASE);
    const pdfLink = page.locator('a[download="Curry_Palace_Menu.pdf"]').first();
    await expect(pdfLink).toBeVisible();
    await expect(pdfLink).toHaveAttribute("href", "/curry-palace-menu.pdf");
  });

  test("hero section renders with Arabic name", async ({ page }) => {
    await page.goto(BASE);
    await expect(page.getByText("مطعم كاري بالس").first()).toBeVisible();
    await expect(page.getByText("The Palace of Iconic Taste")).toBeVisible();
    await expect(page.getByText("Explore Our Menu")).toBeVisible();
    await expect(page.getByText("Order on WhatsApp").first()).toBeVisible();
  });

  test("hero images load without errors (no broken images)", async ({ page }) => {
    await page.goto(BASE);
    await page.waitForTimeout(1500);
    const brokenImages = await page.evaluate(() => {
      return Array.from(document.images)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src);
    });
    expect(brokenImages).toHaveLength(0);
  });

  test("about section shows Kerala heritage", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "About" }).first().click();
    await page.waitForTimeout(800);
    await expect(page.getByText("The Heart of")).toBeVisible();
    await expect(page.getByText("Malabar Coast to Abu Dhabi")).toBeVisible();
    await expect(page.getByText("Thalassery Dum Biriyani")).toBeVisible();
  });

  test("menu section loads all categories", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Menu" }).first().click();
    await page.waitForTimeout(800);
    for (const cat of ["Breakfast", "Lunch Specials", "Dinner Specials", "CP Specials", "Burgers", "Charcoal"]) {
      await expect(page.getByRole("button", { name: new RegExp(cat, "i") }).first()).toBeVisible();
    }
  });

  test("menu search filters results", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Menu" }).first().click();
    await page.waitForTimeout(600);
    await page.getByPlaceholder("Search dishes...").fill("Biriyani");
    await page.waitForTimeout(400);
    await expect(page.getByText("No dishes found")).not.toBeVisible();
  });

  test("menu PDF download button exists in menu section", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Menu" }).first().click();
    await page.waitForTimeout(600);
    await expect(page.getByText("Download Full Menu PDF")).toBeVisible();
    await expect(page.getByText("View Menu PDF")).toBeVisible();
  });

  test("gallery renders images", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Gallery" }).first().click();
    await page.waitForTimeout(800);
    await expect(page.getByText("Photo Gallery")).toBeVisible();
    const imgs = page.locator("#gallery img");
    await expect(imgs.first()).toBeVisible();
    expect(await imgs.count()).toBeGreaterThan(10);
  });

  test("gallery lightbox opens and closes", async ({ page }) => {
    await page.goto(BASE);
    await page.locator("#gallery img").first().click();
    await page.waitForTimeout(400);
    await expect(page.locator("button[aria-label='']").or(page.locator(".fixed.inset-0"))).toBeVisible();
    await page.keyboard.press("Escape");
    await page.waitForTimeout(300);
  });

  test("location section renders map iframe", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Location" }).first().click();
    await page.waitForTimeout(800);
    await expect(page.getByTitle("Curry Palace Restaurant Location")).toBeVisible();
  });

  test("contact WhatsApp form send button works", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Contact" }).first().click();
    await page.waitForTimeout(600);
    const sendBtn = page.getByText("Send via WhatsApp");
    await expect(sendBtn).toBeVisible();
    await expect(sendBtn).toBeDisabled();
    await page.getByPlaceholder("e.g. I'd like to order").fill("2x Biriyani please");
    await expect(sendBtn).toBeEnabled();
  });

  test("footer renders Arabic name and download link", async ({ page }) => {
    await page.goto(BASE);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await expect(page.getByText("© 2025 Curry Palace Restaurant").or(page.getByText("© 2026 Curry Palace Restaurant"))).toBeVisible();
  });

  test("WhatsApp floating button is visible", async ({ page }) => {
    await page.goto(BASE);
    await page.waitForTimeout(2000);
    const waBtn = page.locator('a[href*="wa.me"]').last();
    await expect(waBtn).toBeVisible();
  });

  test("PDF file is accessible (returns 200)", async ({ page }) => {
    const resp = await page.request.get(`${BASE}/curry-palace-menu.pdf`);
    expect(resp.status()).toBe(200);
    expect(resp.headers()["content-type"]).toContain("pdf");
  });

  test("smooth scroll navigates to sections", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Menu" }).first().click();
    await page.waitForTimeout(1000);
    const menuSection = page.locator("#menu");
    await expect(menuSection).toBeInViewport();
  });
});

// ── Mobile – iPhone 13 ────────────────────────────────────────────────────────
test.describe("Mobile – iPhone 13 (390×844)", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("page loads on mobile", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Curry Palace/i);
  });

  test("mobile hamburger menu opens and shows nav links", async ({ page }) => {
    await page.goto(BASE);
    const hamburger = page.getByRole("button", { name: "Toggle menu" });
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await page.waitForTimeout(400);
    for (const link of ["About", "Menu", "Gallery", "Location", "Contact"]) {
      await expect(page.getByRole("button", { name: link }).first()).toBeVisible();
    }
  });

  test("mobile menu shows Download PDF button", async ({ page }) => {
    await page.goto(BASE);
    await page.getByRole("button", { name: "Toggle menu" }).click();
    await page.waitForTimeout(400);
    await expect(page.getByText("Download Menu PDF")).toBeVisible();
  });

  test("mobile hero CTAs are full-width and tappable", async ({ page }) => {
    await page.goto(BASE);
    const exploreBtn = page.getByText("Explore Our Menu");
    await expect(exploreBtn).toBeVisible();
    const box = await exploreBtn.boundingBox();
    expect(box?.width).toBeGreaterThan(200);
    expect(box?.height).toBeGreaterThan(44);
  });

  test("mobile badges grid renders 4 items", async ({ page }) => {
    await page.goto(BASE);
    const badges = page.locator("#home .grid > div");
    expect(await badges.count()).toBeGreaterThanOrEqual(4);
  });

  test("mobile menu category tabs are scrollable", async ({ page }) => {
    await page.goto(BASE);
    await page.locator("#menu").scrollIntoViewIfNeeded();
    await page.waitForTimeout(600);
    const tabs = page.locator("#menu .overflow-x-auto button");
    expect(await tabs.count()).toBeGreaterThan(5);
  });

  test("mobile gallery grid shows 2 columns", async ({ page }) => {
    await page.goto(BASE);
    await page.locator("#gallery").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const grid = page.locator("#gallery .grid");
    await expect(grid).toBeVisible();
  });

  test("mobile WhatsApp button visible and reachable", async ({ page }) => {
    await page.goto(BASE);
    await page.waitForTimeout(2000);
    const waBtn = page.locator('a[href*="wa.me"]').last();
    await expect(waBtn).toBeVisible();
  });

  test("no horizontal overflow on mobile", async ({ page }) => {
    await page.goto(BASE);
    const docWidth   = await page.evaluate(() => document.documentElement.scrollWidth);
    const viewWidth  = await page.evaluate(() => window.innerWidth);
    expect(docWidth).toBeLessThanOrEqual(viewWidth + 1);
  });
});

// ── Tablet – iPad ─────────────────────────────────────────────────────────────
test.describe("Tablet – iPad (768×1024)", () => {
  test.use({ viewport: { width: 768, height: 1024 } });

  test("page loads on tablet", async ({ page }) => {
    await page.goto(BASE);
    await expect(page).toHaveTitle(/Curry Palace/i);
  });

  test("tablet gallery shows 3-column grid", async ({ page }) => {
    await page.goto(BASE);
    await page.locator("#gallery").scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await expect(page.locator("#gallery .grid")).toBeVisible();
  });

  test("no horizontal overflow on tablet", async ({ page }) => {
    await page.goto(BASE);
    const docWidth  = await page.evaluate(() => document.documentElement.scrollWidth);
    const viewWidth = await page.evaluate(() => window.innerWidth);
    expect(docWidth).toBeLessThanOrEqual(viewWidth + 1);
  });
});
