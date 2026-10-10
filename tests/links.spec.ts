import { test, expect } from "@playwright/test";
import menu from "../src/data/menu.json";

test("internal links and every menu image resolve", async ({ page, request }) => {
  const targets = new Set<string>(["/robots.txt", "/sitemap.xml", "/icon.svg"]);
  for (const route of ["/", "/menu", "/nosotros", "/valores", "/contacto"]) {
    expect((await page.goto(route))?.status(), route).toBe(200);
    const paths = await page.locator("a[href], img[src]").evaluateAll(elements => elements.map(el => el.getAttribute("href") || el.getAttribute("src") || "").filter(path => path.startsWith("/") && !path.startsWith("//")));
    paths.forEach(path => targets.add(path.split("#")[0]));
  }
  menu.items.forEach(item => targets.add(item.image));
  for (const target of targets) {
    expect((await request.get(target)).ok(), target).toBe(true);
  }
});
