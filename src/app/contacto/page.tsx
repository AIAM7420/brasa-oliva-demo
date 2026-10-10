import type { Metadata } from "next";
import { getSite } from "@/lib/data";
import { safeUrl } from "@/lib/contact";
import { ContactAction } from "@/components/contact-action";
import { ContactLinks } from "@/components/contact-links";
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Horarios demostrativos y cómo preparar una consulta para Brasa & Oliva.",
};
export default function Contact() {
  const site = getSite();
  const reservation = safeUrl(site.reservationUrl);
  const map = site.locationIsReal ? safeUrl(site.mapUrl) : null;
  return (
    <div className="container page-section">
      <div className="page-heading">
        <p className="section-kicker">Siempre hay una buena ocasión</p>
        <h1>Hagamos un lugar.</h1>
        <p>
          Una comida en familia. Una fecha especial. Una sobremesa cualquiera.
        </p>
      </div>
      <div className="contact-grid">
        <section>
          <h2>Visítanos</h2>
          <p>{site.address}</p>
          {map ? (
            <a
              className="text-link"
              href={map}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver ubicación en el mapa
            </a>
          ) : null}
          <h3>Horarios de demostración</h3>
          <dl className="hours">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
          <ContactLinks contact={site} />
          {!site.email && !site.socials.length ? (
            <p className="muted">Correo y redes pendientes de configuración.</p>
          ) : null}
          {reservation ? (
            <a
              href={reservation}
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar en sitio externo
            </a>
          ) : (
            <p className="fine-print">
              Las reservaciones estarán disponibles al configurar un enlace
              externo. Esta demo no confirma visitas ni guarda solicitudes.
            </p>
          )}
        </section>
        <section className="contact-panel">
          <h2>Prepara tu consulta</h2>
          <ContactAction
            phone={site.phone}
            message="Hola, me gustaría conocer más sobre Brasa & Oliva y consultar opciones para una visita. ¿Me comparten información?"
          />
        </section>
      </div>
    </div>
  );
}
