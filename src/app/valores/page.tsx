import type { Metadata } from "next";
import Image from "next/image";
import { getSite } from "@/lib/data";
export const metadata: Metadata = {
  title: "Nuestra esencia",
  description:
    "Ingredientes, hospitalidad y creatividad: los valores del concepto Brasa & Oliva.",
};
export default function Values() {
  return (
    <div className="container page-section">
      <div className="page-heading">
        <p className="section-kicker">Nuestra esencia</p>
        <h1>El cuidado se saborea.</h1>
        <p>Una filosofía que va de la cocina a la mesa.</p>
      </div>
      <div className="values-layout">
        <div className="values-photo">
          <Image
            src="/images/ensalada.jpg"
            alt="Vegetales frescos y hojas verdes de temporada"
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>
        <div>
          {getSite().values.map((v) => (
            <section className="value-row" key={v.title}>
              <h2>{v.title}</h2>
              <p>{v.text}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
