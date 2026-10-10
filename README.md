# Brasa & Oliva

Demo comercial independiente, en español mexicano, con Next.js App Router, React, TypeScript estricto y Tailwind CSS. Sin base de datos, autenticación ni backend propio.

## Ejecutar en local

Requisitos: Node.js 24 LTS recomendado y npm. Validado con Node 24.15.0 y npm 11.12.1.

Desde PowerShell:

```powershell
cd Restaurante
npm ci
npm run dev
```

Abrir http://localhost:3001. La otra aplicación, `Ropa`, funciona en el puerto 3000; se pueden ejecutar simultáneamente en terminales separadas.

Para probar producción:

```powershell
npm run build
npm run start
```

## Estructura y decisiones

- `src/app/`: rutas, layouts de servidor, metadata, robots y sitemap.
- `src/components/`: presentación e islas cliente para interacción; menús y paneles accesibles con Radix Dialog.
- `src/data/`: contenido, contactos y catálogo local editable.
- `src/lib/data.ts`: acceso a datos y validación al construir. Es el punto de sustitución para un futuro CMS.
- `src/lib/contact.ts`: formato MXN, validación de enlaces y mensajes WhatsApp codificados.
- `public/images/`: fotografías locales optimizadas en pantalla por `next/image`.
- `tests/`: pruebas funcionales, responsive y auditoría axe.
- `reports/`: capturas y mediciones de Lighthouse; `VALIDACION.md` resume resultados ejecutados.

Se generan páginas estáticas. La navegación, filtros, galerías y portapapeles se ejecutan en el navegador. No hay solicitudes guardadas ni simulaciones de envío. Motion se usa únicamente en la entrada del hero, sin ocultar el contenido; se respeta movimiento reducido. Radix administra foco y Escape en los paneles. Las fuentes se descargan durante el build con `next/font` y se sirven desde la propia aplicación.

## Personalizar contenido y contactos

Editar `src/data/site.json` para cambiar navegación, historia, valores, textos generales y configuración. Los nombres de marca también aparecen en metadata, wordmark y footer: al adaptar a otro negocio, revisar esas piezas y `src/app/icon.svg`.

```json
{
  "phone": "+525512345678",
  "email": "hola@tu-dominio.mx",
  "socials": [
    { "label": "Instagram", "url": "https://www.instagram.com/tu-cuenta/" }
  ]
}
```

Los valores anteriores son ejemplos de formato: sustituirlos por contactos propios. El teléfono acepta E.164 de 8 a 15 dígitos, con `+` opcional, sin espacios ni guiones. Con un teléfono válido aparece WhatsApp y el enlace para llamar. Sin teléfono válido se muestra un mensaje copiable, con selección manual si el portapapeles no está disponible. Solo se aceptan enlaces HTTPS en redes y reservación.

**Editar archivos locales no actualiza una publicación existente: hay que reconstruir o desplegar nuevamente.** No se incluye panel administrativo ni CMS. En una integración futura, sustituir las funciones de `src/lib/data.ts` por consultas al CMS y conservar los tipos y contratos consumidos por los componentes.

## Imágenes y licencias

Ver `src/data/image-sources.json`: archivo local, URL exacta de origen, licencia y uso. Recursos de Unsplash bajo https://unsplash.com/license. Algunas imágenes tienen página y autor verificados adicionalmente. Son referencias ilustrativas; no acreditan local, equipo ni producto real. Para cambiar una imagen, añadir un archivo a `public/images/`, actualizar el dato y escribir un texto alternativo adecuado. No se necesitan URLs remotas en tiempo de ejecución.

El catálogo y las historias son ficticios. No se presentan reseñas, certificaciones, premios ni resultados comerciales inventados. Antes de convertir la demo en un negocio real, reemplazar los datos e imágenes ilustrativos por los autorizados del negocio.

## Validaciones y capturas

```powershell
npm run typecheck
npm run lint
npm run build
npm run test:e2e
```

Las pruebas arrancan automáticamente el servidor de producción; requieren un build previo. Se usa Google Chrome instalado (`channel: chrome`). Si falta, instalarlo antes de ejecutar la suite. Para inspección interactiva: `npm run test:e2e:ui`. El reporte HTML se genera en `playwright-report/` y las trazas de fallos en `test-results/`.

Se recorren 320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1440 y 1920 px; se comprueban orientaciones representativas de 844×390 y 1024×768. Se capturan inicio, catálogo/menú y contacto a 390, 820 y 1440 px. La auditoría axe cubre reglas WCAG A/AA aplicables en móvil y escritorio; complementa la revisión manual, no certifica conformidad completa.

Para Lighthouse, iniciar producción en otra terminal y ejecutar:

```powershell
npm run audit
```

Los informes HTML y JSON se guardan en `reports/lighthouse/`. Se utiliza el perfil móvil predeterminado de Lighthouse sobre localhost. Los resultados varían según equipo, carga y red; consultar las mediciones reales en `VALIDACION.md`.

## Publicar en GitHub y Netlify

Cada carpeta se publica como la raíz de un repositorio independiente: `usa-sportswear-demo` para Ropa y `brasa-oliva-demo` para Restaurante. No subir node_modules, .next, credenciales, archivos .env ni reportes locales. Conservar package-lock.json.

1. Ejecutar `npm run typecheck`, `npm run lint`, `npm run build` y `npm run test:e2e` antes de subir cambios.
2. Crear el repositorio si no existe y publicar en `main`, sin force push ni sobrescribir repositorios existentes.
3. En Netlify, importar ese repositorio desde GitHub y seleccionar Next.js. La raíz es el propio repositorio (`.`), no la carpeta original del equipo.
4. Elegir `main` como rama de producción. `netlify.toml` configura `npm run build`, `.next` y Node.js 24. Netlify instala automáticamente su adaptador OpenNext; no fijar una versión del adaptador ni activar `next export` o `output: export`.
5. Configurar `NEXT_PUBLIC_SITE_URL` con la URL HTTPS definitiva del sitio y volver a desplegar. Es una URL pública necesaria para canonical, Open Graph, robots y sitemap; no es un secreto. No se requieren otras variables.
6. Esperar un despliegue exitoso y verificar la URL HTTPS, todas las rutas internas, imágenes, filtros y contactos en móvil, tablet y escritorio. No considerar publicado hasta confirmar el despliegue.

Referencia: https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/

### Modificar después de publicar

Editar los JSON en `src/data/` y las imágenes en `public/images/`, ejecutar las verificaciones, crear un commit y hacer `git push origin main`. La conexión GitHub–Netlify reconstruye y publica cada cambio automáticamente. Consultar el registro de despliegue antes de comprobar la URL pública. Un teléfono válido en `src/data/site.json` habilita WhatsApp; con `null` se conserva el mensaje copiable.

El estado real de publicación se documenta en `PUBLICACION.md`. No hay un despliegue confirmado mientras ese archivo no indique una URL verificada.

## Mejoras futuras

Reemplazar datos por un CMS conservando las interfaces, incorporar fotografías reales autorizadas y medir Core Web Vitals con tráfico real. No se han añadido dependencias de CMS, analytics ni infraestructura anticipada.

## Editar menú y horarios

`src/data/menu.json` contiene `categories` e `items`. Para añadir un platillo:

```json
{
  "id": "plato-nuevo",
  "name": "Ensalada de temporada",
  "description": "Vegetales frescos y vinagreta de hierbas.",
  "price": 185,
  "category": "entradas",
  "image": "/images/ensalada.jpg",
  "alt": "Ensalada con vegetales frescos",
  "tags": ["Vegetariano"],
  "available": true
}
```

Usar identificadores únicos. `price` es un número en pesos MXN. `available: false` muestra el platillo como no disponible. Las etiquetas no se infieren: describir ingredientes y alérgenos con información acreditada al adaptar el sitio.

Para una categoría nueva, añadir `{ "id": "especiales", "name": "Especiales" }` a `categories` y usar `"category": "especiales"` en los platillos. Los controles se generan desde los datos. El build rechaza identificadores duplicados, categorías desconocidas, precios inválidos y campos esenciales incorrectos.

Horarios: editar `hours` en `site.json`. Para reservación, configurar `reservationUrl` con la URL HTTPS de un servicio externo. Para mapa, establecer una dirección real, `locationIsReal: true` y `mapUrl` HTTPS: aparecerá un enlace al mapa, sin cargar rastreadores ni mostrar ubicaciones ficticias.
