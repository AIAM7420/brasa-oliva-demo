import Image from "next/image";
import type { Dish } from "@/lib/data";
import { money } from "@/lib/contact";
export function DishCard({ dish, heading = "h2" }: { dish: Dish; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <article className={`dish-card ${!dish.available ? "unavailable" : ""}`}>
      <div className="dish-photo">
        <Image
          src={dish.image}
          alt={dish.alt}
          fill
          sizes="(max-width: 599px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        {!dish.available ? (
          <span className="availability">No disponible hoy</span>
        ) : null}
      </div>
      <div className="dish-body">
        <div className="dish-heading">
          <Heading>{dish.name}</Heading>
          <span>{money(dish.price)}</span>
        </div>
        <p>{dish.description}</p>
        <div className="tags">
          {dish.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
