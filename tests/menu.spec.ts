import { test, expect } from "@playwright/test";
test("menu category filters, search, empty state and availability", async ({
  page,
}) => {
  await page.goto("/menu");
  await expect(page.getByRole("status")).toContainText("16 platillos");
  await page.getByRole("button", { name: "Postres", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("4 platillos");
  await expect(page.getByText("No disponible hoy")).toBeVisible();
  await page
    .getByRole("textbox", { name: "Buscar platillo" })
    .fill("no-existe");
  await expect(
    page.getByRole("heading", { name: "Probemos con otro antojo." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Ver todo el menú" }).click();
  await expect(page.getByRole("status")).toContainText("16 platillos");
  await page.getByRole("button", { name: "Entradas", exact: true }).click();
  await expect(page.locator(".tags").first()).toContainText("Vegetariano");
});
