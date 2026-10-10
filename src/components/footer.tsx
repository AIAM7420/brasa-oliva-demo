import Link from "next/link";
import { getSite } from "@/lib/data";
export function Footer() {
  const site = getSite();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            brasa & oliva
          </Link>
          <p>
            El fuego nos reúne.
            <br />
            La sobremesa nos queda.
          </p>
        </div>
        <nav aria-label="Pie de página">
          {site.navigation.slice(1).map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div>
          <p>Ciudad de México</p>
          <p>
            Concepto gastronómico ficticio.
            <br />
            Información e imágenes de demostración.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Brasa & Oliva · Demo comercial
        </span>
        <span>Hecho para compartir la mesa.</span>
      </div>
    </footer>
  );
}
