# Handoff: NCG Eventos — Sitio web institucional

## Overview
Sitio web institucional de una página (one-page) para **NCG Eventos · by kokoa_te**, una empresa de
**organización, decoración y alquiler de elementos para eventos** (cumpleaños, eventos infantiles,
bautizos, comuniones y bodas).

El sitio **no vende online**: no tiene carrito, ni pagos, ni catálogo con precios. Su único objetivo es
**mostrar los servicios y empujar el contacto por WhatsApp**. Todos los CTA llevan a `wa.me`.

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — prototipos que muestran el
aspecto y el comportamiento deseados, **no código de producción para copiar tal cual**.

La tarea es **recrear este diseño en el entorno del codebase destino** (React, Vue, Astro, WordPress,
HTML/CSS plano, etc.) usando sus patrones y librerías establecidos. Si todavía no hay un entorno, elegir
el framework más apropiado (para un sitio institucional estático, **Astro o HTML/CSS plano** es ideal y
muy liviano) e implementar ahí.

Notas sobre la tecnología del prototipo:
- `NCG Eventos.dc.html` es el archivo fuente; usa un runtime propio (`support.js`) con plantilla + una clase
  de lógica en JS. **No portar ese runtime.** Servirá solo para leer markup, estilos y lógica.
- `NCG Eventos - Web (standalone).html` es el mismo diseño **empaquetado y autocontenido** (funciona offline,
  fuentes y assets incrustados). Útil para abrir en el navegador y ver el resultado final exacto.

## Fidelity
**Alta fidelidad (hifi).** Colores, tipografías, espaciados, animaciones e interacciones son los finales.
Recrear la UI de forma fiel usando las librerías/patrones del codebase destino.

## Tech / Layout general
- **Ancho de contenido**: contenedor central `max-width: 1180px`, centrado, con padding horizontal
  `clamp(20px, 5vw, 64px)`.
- **Responsive sin media queries**: todo usa `clamp()` para tipografía/espaciados y `flex-wrap` /
  `grid-template-columns: repeat(auto-fit, minmax(...))` para reflujo. Se puede reimplementar con media
  queries normales si el codebase lo prefiere.
- **Orden de secciones**: Nav (fija) → Hero → Intro "Qué hacemos" → Cinta animada → Servicios →
  Alquileres → Galería → Contacto → Footer. Botón flotante de WhatsApp + barra de progreso de scroll.

---

## Screens / Views

Es una sola página con scroll. Cada sección abajo.

### 1. Nav (barra superior fija)
- **Layout**: `position: fixed`, full width, `display:flex; justify-content:space-between; align-items:center`.
  Padding `18px clamp(20px,5vw,64px)`. `backdrop-filter: blur(12px)`, fondo `rgba(245,237,224,0.82)`,
  borde inferior `1px solid rgba(196,154,69,0.18)`. `z-index:50`.
- **Izquierda (logo lockup)**: "NCG" en serif (Cormorant Garamond, 30px, weight 600, letter-spacing 0.14em,
  color `#C49A45`) + separador vertical 1px `rgba(74,61,48,0.2)` + "EVENTOS" (Jost, 12px, uppercase,
  letter-spacing 0.32em, color `#6E6051`).
- **Derecha**: links "Servicios", "Alquileres", "Galería" (Jost 14px, color `#4A3D30`, hover `#C16B4F`) +
  botón "WhatsApp" (pill, fondo `linear-gradient(120deg,#C16B4F,#D9683F)`, texto `#FCF6EC`, padding
  `11px 20px`, `border-radius:999px`, sombra `0 8px 22px -8px rgba(193,107,79,0.6)`; hover sube 2px y sombra
  más fuerte). Ícono WhatsApp inline (SVG, fill `#FCF6EC`).

### 2. Hero (`#inicio`)
- **Layout**: `min-height:100vh`, flex centrado, `padding:140px clamp(20px,5vw,64px) 110px`, `overflow:hidden`,
  fondo base `#F7F0E4`. Contenido centrado, `max-width:940px`, `text-align:center`.
- **Manchas de color animadas (blobs)**: 3 divs `position:absolute`, círculos grandes con `filter:blur(70–80px)`
  y `radial-gradient` de un color a transparente. Animación `ncgBlob` (translate+scale, 16–22s, infinite):
  - Terracota `rgba(217,104,63,0.42)` arriba-izquierda.
  - Dorado `rgba(218,174,78,0.45)` abajo-derecha.
  - Rosa `rgba(224,153,126,0.38)` centro-derecha.
- **Anillos decorativos**: 2 círculos centrados con borde fino dorado (`rgba(196,154,69,0.28)` sólido y
  `0.2` punteado). El externo rota lento (`ncgRing`, 90s linear infinite).
- **Globos**: SVG de globo (elipse + nudo triangular + hilo curvo + brillo). Dos grupos:
  - 4 globos que **suben volando al cargar** desde abajo (`ncgFlyUp`, 6–8s, con delays, `forwards`).
  - 4 globos que **flotan** en loop (`ncgFloat` / `ncgFloatSlow`) y tienen **parallax con el mouse**
    (cada uno con un factor de profundidad; se trasladan según la posición del cursor).
  - Colores de globos: `#C16B4F`, `#CB7E63`, `#BD6A50`, `#C97A5E`. Hilo `#C49A45`, brillo `rgba(255,255,255,0.45)`.
- **Eyebrow**: línea + "EVENTOS · BY KOKOA_TE" (13px, uppercase, letter-spacing 0.4em, color `#C49A45`) + línea.
- **Título (h1)**: Cormorant Garamond, weight 600, `font-size:clamp(38px,6vw,78px)`, line-height 1.04,
  color `#3F3328`. Texto: "Organización, decoración / y alquiler para / *eventos especiales*".
  - "eventos especiales" en itálica con **texto en degradé** `linear-gradient(90deg,#C16B4F 0%,#D9683F 45%,#DAAE4E 100%)`
    (background-clip:text) y un **subrayado animado** que se "dibuja" (`ncgDraw`: scaleX 0→1, 0.9s, delay 1.1s),
    barra de 5px `linear-gradient(90deg,#C16B4F,#DAAE4E)`, border-radius 5px.
- **Párrafo**: Jost 300, `clamp(16px,1.5vw,19px)`, line-height 1.7, color `#6E6051`, max-width 560px.
- **CTAs**: botón primario "Consultar por WhatsApp" (mismo gradiente terracota del nav, 16px, padding
  `16px 32px`, hover sube 3px + scale 1.02) y link secundario "Ver servicios →" (texto `#4A3D30`,
  borde inferior, hover color terracota).
- **Indicador de scroll**: chevron hacia abajo (SVG polyline, stroke `#C16B4F`) centrado abajo, animación
  `ncgBounce` (sube/baja 10px, 2s infinite). Es un link a `#servicios`.

### 3. Intro "Qué hacemos"
- Sección `background:#FBF5EA`, centrada, padding `clamp(56px,8vw,96px) ...`.
- Eyebrow "QUÉ HACEMOS" + frase grande en Cormorant Garamond 400, `clamp(26px,3.4vw,40px)`, line-height 1.4,
  color `#4A3D30`, max-width 780px. Resalta "*orden, calidez y un estilo cuidado*" en itálica color `#C16B4F`.

### 4. Cinta animada (marquee)
- Banda full-width fondo `linear-gradient(120deg,#C16B4F,#D9683F)`, padding `22px 0`, `overflow:hidden`.
- Fila horizontal que se desplaza en loop infinito (`ncgMarquee`: translateX 0 → -50%, 28s linear infinite;
  **pausa al hover**). Para loop sin saltos, el contenido está **duplicado** (dos mitades idénticas).
- Ítems: "Eventos infantiles · Cumpleaños · Bautizos · Comuniones · Bodas" en Cormorant Garamond itálica 30px,
  color `#FCF6EC`, separados por un "✦" color `#FBE3CF`.

### 5. Servicios (`#servicios`)
- Sección `background:#F5EDE0`, padding `clamp(64px,9vw,120px) ...`.
- Encabezado centrado: eyebrow "SERVICIOS" + h2 "Todo lo que tu evento necesita" (Cormorant Garamond 600,
  `clamp(34px,5vw,60px)`, color `#3F3328`).
- **Grid de 3 tarjetas**: `grid-template-columns: repeat(auto-fit, minmax(290px,1fr))`, gap `clamp(20px,2.4vw,32px)`.
  - Tarjeta: fondo `#FFFDF8`, borde `1px solid rgba(196,154,69,0.2)`, `border-radius:22px`, padding `44px 34px 40px`,
    `position:relative; overflow:hidden`.
  - **Barra de acento superior** (5px) con degradé distinto por tarjeta:
    1) `linear-gradient(90deg,#C16B4F,#DAAE4E)` 2) `#D9683F→#E0997E` 3) `#DAAE4E→#C16B4F`.
  - Ícono en chip redondeado (60×60, `border-radius:18px`, fondo degradé suave). SVG line-icon (stroke 1.6):
    calendario, sol/flor, mesa-servida respectivamente.
  - h3 Cormorant Garamond 30px weight 600 color `#3F3328`; párrafo Jost 300, 15.5px, line-height 1.7, color `#6E6051`.
  - **Hover**: sube 10px, sombra `0 30px 56px -24px rgba(193,107,79,0.45)`, borde `rgba(193,107,79,0.45)`.
  - Contenido (copy exacto):
    - **Organización de eventos** — "Te acompañamos en la planificación y preparación de cada evento social,
      encargándonos de coordinar los detalles para que disfrutes del momento."
    - **Decoración de eventos** — "Creamos ambientaciones especiales para cumpleaños, eventos infantiles,
      bautizos, comuniones y bodas, cuidando cada detalle para una presentación única."
    - **Alquiler de elementos** — "Ofrecemos alquiler de mesas, sillas, vajillas, cubiertos y cristalería
      en general para completar la organización y el montaje de tu evento."

### 6. Alquileres (`#alquileres`)
- Sección `background:#EFE4D3`, padding `clamp(64px,9vw,120px) ...`.
- **2 columnas** (`repeat(auto-fit, minmax(320px,1fr))`, gap `clamp(36px,5vw,72px)`, align-items center):
  - **Izquierda (texto)**: eyebrow "ALQUILERES" + h2 "Mobiliario y elementos para tu mesa" (Cormorant 600,
    `clamp(32px,4.6vw,54px)`) + párrafo + link "Consultar disponibilidad →" (color `#C16B4F`, borde inferior;
    hover aumenta el `gap` a 16px → la flecha se separa).
    Copy: "Completá la organización de tu evento con nuestro alquiler de elementos. Contamos con todo lo
    necesario para armar mesas prolijas y elegantes."
  - **Derecha (grid 2×n)**: items "Mesas", "Sillas", "Vajillas", "Cubiertos" en chips `#FFFDF8`
    (`border-radius:16px`, padding `26px 22px`, borde dorado suave; hover sube 5px + sombra). El item
    **"Cristalería en general"** ocupa el ancho completo (`grid-column:1 / -1`) con fondo
    `linear-gradient(120deg,#C16B4F,#D9683F)` y texto `#FCF6EC`. Texto en Cormorant Garamond 24px.

### 7. Galería (`#galeria`) — interactiva
- Sección `background:#F5EDE0`, padding `clamp(64px,9vw,120px) ...`. Encabezado: eyebrow "GALERÍA" +
  h2 "Algunos de nuestros trabajos" + subtítulo "Filtrá por tipo de evento — espacios reservados para tus
  fotos reales."
- **Filtros (tabs)**: botones pill — `Todos, Cumpleaños, Infantiles, Bautizos, Comuniones, Bodas, Decoración`.
  - Activo: fondo `linear-gradient(120deg,#C16B4F,#D9683F)`, texto `#FCF6EC`, sombra.
  - Inactivo: transparente, borde `1px solid rgba(193,107,79,0.35)`, texto `#9A6B52`.
  - Al hacer click, se **filtran las tarjetas** de la grilla (estado `filter`). "Todos" muestra todo.
- **Grid de tiles**: `repeat(auto-fit, minmax(240px,1fr))`, gap 16px. Cada tile (`min-height:230px`,
  `border-radius:18px`) es un **placeholder con rayas** (`repeating-linear-gradient(135deg, <tinte> 0 14px,
  rgba(255,253,248,0.7) 14px 28px)`) con el nombre del tipo (Cormorant 25px) y una leyenda monoespaciada
  (ej. "foto · cumpleaños"). Hover: `scale(1.03)` + sombra.
  - **Estos placeholders se reemplazan por las fotos reales de la clienta cuando las envíe.** Mantener el
    sistema de filtrado por categoría.
  - Categorías por tile: Cumpleaños / Eventos infantiles (Infantiles) / Bautizos / Comuniones / Bodas / Decoración.

### 8. Contacto (`#contacto`)
- Sección de **color pleno**: `background: radial-gradient(130% 130% at 50% 0%, #D9683F 0%, #C16B4F 45%, #A8573D 100%)`,
  `overflow:hidden`, centrada, padding `clamp(72px,10vw,130px) ...`.
- Decoración: 2 círculos con borde claro (`rgba(252,246,236,0.25)` y `0.22` punteado) que derivan (`ncgDrift`)
  + un blob dorado borroso (`ncgBlob`).
- Eyebrow "CONTACTO" (claro) + h2 "Hablemos de tu próximo evento" (Cormorant 600, `clamp(36px,5.4vw,66px)`,
  color `#FCF6EC`) + párrafo claro: "Consultanos por disponibilidad y armamos una propuesta según el tipo de
  evento que necesitás."
- Botón "Escribinos por WhatsApp": fondo `#FCF6EC`, texto `#A8573D`, pill, padding `17px 36px`, sombra;
  hover sube 3px + scale 1.03.

### 9. Footer
- `background:#3F3328`, texto `#E6D9C6`, padding `clamp(40px,5vw,64px) ...`.
- Fila: logo lockup ("NCG" dorado `#DAAE4E` + "EVENTOS · BY KOKOA_TE") a la izquierda; links (Servicios,
  Alquileres, Galería, WhatsApp) a la derecha (hover `#FCF6EC`).
- Línea de copyright: "© <año> NCG Eventos. Organización, decoración y alquiler para eventos especiales."
  (12px, `rgba(230,217,198,0.45)`, borde superior fino).

### Botón flotante de WhatsApp
- `position:fixed; bottom:26px; right:26px; z-index:60`, 60×60, círculo verde `#25D366`, ícono blanco.
  Animación de **pulso** (`ncgPulse`: anillo de sombra que se expande, 2.4s infinite). Hover scale 1.1.

### Barra de progreso de scroll
- Barra fija arriba (4px), `linear-gradient(90deg,#C16B4F,#DAAE4E)`, su `width` = % de scroll de la página.
  `z-index:70`, `pointer-events:none`.

---

## Interactions & Behavior
- **Todos los CTA** (nav, hero, alquileres, contacto, footer, botón flotante) abren WhatsApp:
  `https://wa.me/<NUMERO>?text=<mensaje url-encoded>` en `target="_blank"`.
  - Mensaje por defecto: "Hola NCG Eventos, me gustaría consultar disponibilidad y un presupuesto para mi evento."
- **Navegación**: links del nav hacen scroll suave (`scroll-behavior:smooth`) a anclas `#servicios`, `#alquileres`,
  `#galeria`, `#contacto`, `#inicio`.
- **Globos al cargar**: 4 suben volando (una sola vez por carga); 4 flotan en loop.
- **Parallax de globos**: en `mousemove` los globos flotantes se trasladan según la posición del cursor
  (factor de profundidad por globo, ~ -dx*factor*80px). Suavizado con `transition: transform .25s`.
- **Marquee**: loop infinito, **se pausa al hover**.
- **Galería**: tabs filtran tiles por categoría (estado en cliente).
- **Hover**: tarjetas suben + sombra; chips de alquiler suben; botones suben/escalan; links mueven la flecha.
- **Barra de progreso**: se actualiza en cada scroll.
- **Animación de carga del título**: subrayado "dibujado" en "eventos especiales" (delay ~1.1s).

> Nota: el prototipo NO usa reveal-on-scroll (se quitó por conflictos con su runtime). En el codebase
> destino podés re-añadir un fade-up al entrar en viewport con IntersectionObserver si lo querés — es opcional.

## State Management
- `filter` (string): categoría activa de la galería. Default `"Todos"`. Cambia al click de cada tab; filtra la grilla.
- Posición del scroll → ancho de la barra de progreso (no necesita estado React; puede ser un listener directo).
- Posición del mouse → transform de los globos (listener directo, sin estado).
- No hay fetch de datos. Sitio 100% estático salvo estos comportamientos de UI.

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| Crema fondo | `#F5EDE0` | fondo general / secciones |
| Crema hero | `#F7F0E4` | fondo hero |
| Crema elevada | `#FBF5EA` | sección intro |
| Crema profunda | `#EFE4D3` | sección alquileres |
| Blanco cálido | `#FFFDF8` | tarjetas / chips |
| Terracota | `#C16B4F` | acento principal |
| Terracota vivo | `#D9683F` | gradientes |
| Terracota profundo | `#A8573D` | fin de gradiente contacto |
| Rosa/blush | `#E0997E` | acento secundario |
| Dorado | `#C49A45` | logo / eyebrows |
| Dorado vivo | `#DAAE4E` | gradientes / NCG footer |
| Tinta (texto fuerte) | `#3F3328` | títulos |
| Texto base | `#4A3D30` | texto / nav |
| Texto suave | `#6E6051` | párrafos |
| Texto sobre oscuro | `#E6D9C6` | footer |
| Claro sobre acento | `#FCF6EC` | texto sobre terracota |
| Mono caption | `#9A8C76` | leyendas de placeholders |
| WhatsApp verde | `#25D366` | botón flotante |

Gradientes recurrentes:
- Botón/acento: `linear-gradient(120deg, #C16B4F, #D9683F)`
- Título resaltado: `linear-gradient(90deg, #C16B4F 0%, #D9683F 45%, #DAAE4E 100%)`
- Contacto: `radial-gradient(130% 130% at 50% 0%, #D9683F 0%, #C16B4F 45%, #A8573D 100%)`

### Tipografía
- **Display/serif**: "Cormorant Garamond" (Google Fonts), weights 400/500/600/700, también itálicas.
  Para títulos, "NCG", frases destacadas.
- **Sans/UI**: "Jost" (Google Fonts), weights 300/400/500/600. Nav, párrafos, botones, tabs.
- Escala (con clamp): h1 `clamp(38px,6vw,78px)`; h2 sección `clamp(34px,5vw,60px)`; h2 contacto
  `clamp(36px,5.4vw,66px)`; frase intro `clamp(26px,3.4vw,40px)`; body `clamp(16px,1.5vw,19px)` / 15.5px;
  eyebrow 13px uppercase letter-spacing 0.34–0.4em.

### Radios / sombras / espaciado
- Radios: tarjetas 22px, chips/tiles 16–18px, ícono chip 18px, pills 999px.
- Sombras suaves y cálidas basadas en `rgba(193,107,79, …)` (terracota) y `rgba(0,0,0,0.4)` en contacto.
- Padding de sección: `clamp(56–72px, 8–10vw, 96–130px)` vertical; `clamp(20px,5vw,64px)` horizontal.
- Contenedor: `max-width:1180px` centrado.

### Keyframes (animaciones)
`ncgFloat` / `ncgFloatSlow` (flote globos), `ncgFlyUp` (subida al cargar), `ncgDrift` (deriva círculos),
`ncgRing` (rotación anillo), `ncgBlob` (manchas color), `ncgMarquee` (cinta), `ncgDraw` (subrayado),
`ncgBounce` (chevron), `ncgPulse` (pulso WhatsApp). Easings tipo `cubic-bezier(.22,.61,.36,1)` para entradas.

## Assets
- `assets/logo-ncg.jpeg` — logo original de la clienta (NCG · Eventos · by kokoa_te). De ahí salió toda la
  paleta (crema, dorado, terracota) y el estilo (serif elegante + globos). En el prototipo el logo se
  **reconstruye con tipografía** (no se usa la imagen en el render); podés usar la imagen real o el lockup
  tipográfico, lo que prefieras.
- **Fotos de galería**: aún no provistas. Hoy son placeholders rayados por categoría; reemplazar por las
  fotos reales de la clienta manteniendo el filtrado.
- Íconos: SVG inline simples (line-icons + WhatsApp + chevron). Se pueden sustituir por la librería de íconos
  del codebase.

## Pendiente importante
- **Número de WhatsApp**: el prototipo usa un placeholder `595981123456`. **Reemplazar por el número real**
  de la clienta en todos los enlaces `wa.me`.

## Files
- `NCG Eventos.dc.html` — fuente del diseño (plantilla + lógica). Referencia para markup/estilos/lógica.
- `NCG Eventos - Web (standalone).html` — diseño empaquetado autocontenido; abrir en navegador para ver el
  resultado final exacto (offline).
- `assets/logo-ncg.jpeg` — logo de la marca.
