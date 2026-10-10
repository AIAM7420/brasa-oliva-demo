import type { Metadata } from "next";
import Image from "next/image";
import { getSite } from "@/lib/data";
export const metadata: Metadata = {
  title: "La casa",
  description: "Conoce el concepto ficticio y la filosofía de Brasa & Oliva.",
};
export default function About() {
  const s = getSite().story;
  return (
    <div className="container page-section">
      <div className="page-heading narrow">
        <p className="section-kicker">Nuestra historia</p>
        <h1>{s.title}</h1>
        <p>{s.intro}</p>
      </div>
      <div className="wide-photo">
        <Image
          src="/images/salon.jpg"
          alt="Referencia del ambiente de una casa gastronómica cálida"
          fill
          sizes="100vw"
        />
      </div>
      <div className="story-grid">
        {s.sections.map((x) => (
          <section key={x.title}>
            <h2>{x.title}</h2>
            <p>{x.text}</p>
          </section>
        ))}
      </div>
      <p className="fine-print">
        Historia, equipo e identidad creados para una demo comercial. Las
        fotografías no representan a un equipo o local real de esta marca.
      </p>
    </div>
  );
}
