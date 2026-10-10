import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container page-section empty-state">
      <h1>Esta mesa aún no existe.</h1>
      <p>No encontramos la página que buscas.</p>
      <Link className="button" href="/">
        Volver al inicio
      </Link>
    </div>
  );
}
