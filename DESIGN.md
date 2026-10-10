# Sistema de diseño de Brasa & Oliva

Tokens en `src/app/globals.css`; las variables de fuentes vienen de `next/font`.

| Decisión   | Valor                                                                                 |
| ---------- | ------------------------------------------------------------------------------------- |
| Dirección  | Gastronómica cálida, fotografía de mesa y composiciones abiertas                      |
| Tipografía | Fraunces + Source Sans 3                                                              |
| Paleta     | Espresso #30231F, crema #F5EFE3, oliva #526044, cobre #98613F, superficie #E8DFCF     |
| Espaciado  | .5, 1, 1.5, 2 rem y secciones fluidas mediante clamp                                  |
| Radio      | 0.25rem; pestañas gastronómicas redondeadas                                           |
| Movimiento | 220 ms, cubic-bezier(.2,.7,.3,1); hero 450 ms sin pérdida de contraste                |
| Estados    | Variables success/error, foco visible de 3px, controles deshabilitados identificables |
| Sombra     | Reservada para paneles superpuestos                                                   |

Diseño móvil primero, tipografía fluida y contenedores limitados. Breakpoints principales a 48rem y 70rem, con adaptaciones específicas para catálogo, navegación y tamaños estrechos. Las variables breakpoint documentan el sistema; las media queries usan valores explícitos porque CSS no admite variables normales en sus condiciones.

Se aplicaron las skills frontend-design y vercel-react-best-practices: composición propia por marca, narrativa ligada al producto, Server Components por defecto, props acotadas a las islas cliente, imports optimizados de iconografía y Motion, sin waterfalls de datos ni librerías de estado innecesarias.
