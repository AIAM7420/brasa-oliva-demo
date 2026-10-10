"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, Sprout } from "lucide-react";
import { useState } from "react";
import site from "@/data/site.json";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Brasa & Oliva, inicio">
          <Sprout size={28} strokeWidth={1.3} />
          <span>
            brasa <i>&</i> oliva
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Principal">
          {site.navigation.slice(1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacto" className="button button-small desktop-cta">
          Hablemos de tu visita
        </Link>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              className="icon-button mobile-trigger"
              aria-label="Abrir menú"
            >
              <Menu />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="dialog-overlay" />
            <Dialog.Content className="drawer">
              <Dialog.Title>Brasa & Oliva</Dialog.Title>
              <Dialog.Description>
                Encuentra tu próxima sobremesa.
              </Dialog.Description>
              <Dialog.Close asChild>
                <button
                  className="icon-button drawer-close"
                  aria-label="Cerrar menú"
                >
                  <X />
                </button>
              </Dialog.Close>
              <nav aria-label="Navegación móvil">
                {site.navigation.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={path === n.href ? "page" : undefined}
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <p className="muted">
                Una casa imaginaria. Una experiencia para descubrir.
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
