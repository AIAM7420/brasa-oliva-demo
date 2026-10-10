"use client";
import { useState } from "react";
import type { Menu } from "@/lib/data";
import { DishCard } from "./dish-card";
import { Search } from "lucide-react";
export function MenuBrowser({ menu }: { menu: Menu }) {
  const [category, setCategory] = useState("todos");
  const [query, setQuery] = useState("");
  const dishes = menu.items.filter(
    (d) =>
      (category === "todos" || d.category === category) &&
      d.name
        .toLocaleLowerCase("es-MX")
        .includes(query.toLocaleLowerCase("es-MX")),
  );
  return (
    <>
      <div className="menu-tools">
        <div
          className="category-tabs"
          role="group"
          aria-label="Categorías del menú"
        >
          {[{ id: "todos", name: "Todo el menú" }, ...menu.categories].map(
            (c) => (
              <button
                key={c.id}
                aria-pressed={category === c.id}
                onClick={() => setCategory(c.id)}
              >
                {c.name}
              </button>
            ),
          )}
        </div>
        <label className="search-field">
          <Search size={18} />
          <span className="sr-only">Buscar platillo</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="¿Qué se te antoja?"
          />
        </label>
      </div>
      <p className="result-count" role="status">
        {dishes.length} platillos · Precios de demostración en MXN
      </p>
      {dishes.length ? (
        <div className="dish-grid">
          {dishes.map((d) => (
            <DishCard key={d.id} dish={d} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Probemos con otro antojo.</h2>
          <p>No encontramos platillos con esa búsqueda.</p>
          <button
            className="button"
            onClick={() => {
              setQuery("");
              setCategory("todos");
            }}
          >
            Ver todo el menú
          </button>
        </div>
      )}
    </>
  );
}
