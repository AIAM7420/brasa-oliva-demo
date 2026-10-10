import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getMenu, getSite } from "@/lib/data";
import { DishCard } from "@/components/dish-card";
import { Reveal } from "@/components/reveal";
export default function Home() {
  const site = getSite();
  const dishes = getMenu().items.filter((d) =>
    ["plato-5", "plato-6", "plato-7"].includes(d.id),
  );
  return (
    <>
      <section className="hero">
        <Image
          src="/images/mesa.jpg"
          alt="Mesa con platos de cocina contemporánea y copas, iluminada con calidez"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <Reveal>
            <p className="hero-note">{site.home.heroNote}</p>
            <h1>
              {site.home.heroLine1}
              <br />
              {site.home.heroLine2}
            </h1>
            <p>
              {site.home.heroDescription1}
              <br />
              {site.home.heroDescription2}
            </p>
            <Link href="/menu" className="button button-light">
              {site.home.heroButton} <ArrowUpRight size={18} />
            </Link>
          </Reveal>
        </div>
        <div className="hero-caption">
          <span>Brasa & Oliva</span>
          <span>Una experiencia gastronómica de demostración</span>
        </div>
      </section>
      <section className="section container intro-grid">
        <div>
          <p className="section-kicker">{site.home.introNote}</p>
          <h2>{site.home.introTitle}</h2>
        </div>
        <div>
          <p className="lead">{site.home.intro}</p>
          <Link className="text-link" href="/nosotros">
            Conoce nuestra historia <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section featured-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{site.home.featuredNote}</p>
              <h2>{site.home.featuredTitle}</h2>
            </div>
            <Link className="text-link" href="/menu">
              Ver la carta completa <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="dish-grid">
            {dishes.map((d) => (
              <DishCard key={d.id} dish={d} heading="h3" />
            ))}
          </div>
        </div>
      </section>
      <section className="split-story">
        <div className="story-photo">
          <Image
            src="/images/cocina.jpg"
            alt="Un espacio cálido de cocina y hospitalidad"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
        <div className="story-copy">
          <p className="section-kicker">Nuestra filosofía</p>
          <h2>{site.home.chefTitle}</h2>
          <p>{site.home.chef}</p>
          <Link href="/valores" className="text-link">
            Lo que nos mueve <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section container atmosphere">
        <div className="section-heading">
          <div>
            <p className="section-kicker">{site.home.atmosphereNote}</p>
            <h2>
              {site.home.atmosphereTitle1}
              <br />
              {site.home.atmosphereTitle2}
            </h2>
          </div>
          <p>
            {site.home.atmosphereDescription1}
            <br />
            {site.home.atmosphereDescription2}
          </p>
        </div>
        <div className="atmosphere-photo">
          <Image
            src="/images/salon.jpg"
            alt="Interior de restaurante con mesas de madera, plantas y luz cálida; referencia de ambiente"
            fill
            sizes="100vw"
          />
        </div>
      </section>
      <section className="closing">
        <div className="container">
          <p>{site.home.closingNote}</p>
          <h2>{site.home.closingTitle}</h2>
          <Link href="/contacto" className="button button-light">
            Prepara tu visita <ArrowUpRight size={18} />
          </Link>
          <p className="demo-note">
            Restaurante ficticio. No se reciben reservaciones reales.
          </p>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            description: "Demostración de un restaurante ficticio",
            inLanguage: "es-MX",
          }),
        }}
      />
    </>
  );
}
