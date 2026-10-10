import type { Metadata } from "next";
import { getMenu } from "@/lib/data";
import { MenuBrowser } from "@/components/menu-browser";
export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora entradas, platos fuertes, postres y bebidas de nuestra carta de demostración.",
};
export default function MenuPage() {
  return (
    <div className="container page-section">
      <div className="page-heading">
        <p className="section-kicker">A fuego lento, a tu gusto</p>
        <h1>La carta.</h1>
        <p>Elige tu antojo. Nosotros imaginamos el resto.</p>
      </div>
      <MenuBrowser menu={getMenu()} />
      <p className="fine-print">
        Carta e inventario ficticios. Las fotografías son referencias
        ilustrativas de presentación. Si tienes alergias, consulta los
        ingredientes antes de consumir en un establecimiento real.
      </p>
    </div>
  );
}
