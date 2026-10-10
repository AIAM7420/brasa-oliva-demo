import menuData from "@/data/menu.json";
import site from "@/data/site.json";
export type Category = { id: string; name: string };
export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  alt: string;
  tags: string[];
  available: boolean;
};
export type Menu = { categories: Category[]; items: Dish[] };
const menu: Menu = menuData;
const ids = new Set(menu.categories.map((c) => c.id));
if (
  ids.size !== menu.categories.length ||
  new Set(menu.items.map((i) => i.id)).size !== menu.items.length ||
  menu.items.some(
    (i) =>
      !ids.has(i.category) ||
      !Number.isFinite(i.price) ||
      i.price < 0 ||
      !i.name ||
      !i.image.startsWith("/images/") ||
      !i.alt ||
      typeof i.available !== "boolean",
  )
)
  throw new Error(
    "Revisa los identificadores, categorías, precios y campos del menú.",
  );
export const getMenu = () => menu;
export const getSite = () => site;
