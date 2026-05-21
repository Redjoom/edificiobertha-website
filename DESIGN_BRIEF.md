# 🎨 Design Brief — Edificio Bertha Landing Page

## Resumen Ejecutivo

Landing page para **Edificio Bertha**, edificio histórico en Mexicali reconvertido en hub cultural con tres pilares: galería de arte urbano, espacio de música en vivo para bandas originales, y centro de networking.

---

## Identidad Visual

### Concepto
**"Patrimonio que respira cultura"** — Un edificio con historia que alberga el presente y futuro creativo de Mexicali.

### Paleta
| Token | Hex | Uso |
|-------|-----|-----|
| `bg-primary` | `#0A0A0A` | Fondos principales |
| `bg-secondary` | `#141414` | Secciones alternas |
| `accent` | `#D4A853` | CTAs, acentos, hover states |
| `accent-warm` | `#C75B2E` | Badges arte, toques de calor |
| `text-primary` | `#F5F0E8` | Texto principal |
| `text-muted` | `#8A8A8A` | Captions, metadata |
| `border` | `#2A2A2A` | Bordes sutiles |

### Tipografía
- **Display:** Space Grotesk (700) — Títulos, hero, marca
- **Body:** Inter (400-500) — Texto corrido, descripciones
- **Mono:** JetBrains Mono (400) — Labels, fechas, metadata, CTAs

### Mood
- Oscuro, sofisticado, industrial elegante
- Raw pero pulido (como el edificio mismo)
- Calor desértico en los acentos dorados

---

## Estructura de Secciones

### 1. Hero
- Full viewport height
- Imagen/video del edificio por la noche con overlay gradiente
- "EDIFICIO BERTHA" en display grande
- Subtítulo: propuesta de valor en 1 línea
- 2 CTAs: "Ver Calendario" (primary) + "Conocer Historia" (secondary)
- Scroll indicator animado

### 2. Historia
- Grid 2 cols: imagen B/N + texto
- Timeline vertical con 4 hitos
- Quote destacado

### 3. Espacios (3 Cards)
- Galería Urbana — icono cuadro, tag "Exposiciones · Murales · Talleres"
- Escenario Bertha — icono nota musical, tag "Conciertos · Bandas Originales"
- La Sala — icono personas, tag "Networking · Coworking · Eventos"

### 4. Calendario
- Filtros: Todos / Arte / Música / Networking
- Lista de eventos con fecha grande (monospace), info, badge de categoría

### 5. Galería
- Masonry grid 4 cols (2 cols mobile)
- Hover: zoom suave + caption fade-in
- Lazy loading

### 6. Comunidad
- Grid 4 cols de tarjetas: avatar + nombre + rol + quote

### 7. Contacto
- Grid 2 cols: info + formulario
- Mapa placeholder
- Detalles: dirección, horarios, teléfono, email

### 8. Footer
- 4 cols: brand + links + links + social
- Copyright + créditos

---

## Interacciones

| Elemento | Efecto | Detalle técnico |
|----------|--------|-----------------|
| Navbar scroll | Glassmorphism | `backdrop-filter: blur(20px)` + bg opacity 0.92 |
| Hero load | Staggered fade-up | 5 elementos, delay 0.1s cada uno |
| Secciones scroll | Reveal | IntersectionObserver, translateY 30px→0, opacity 0→1 |
| Cards hover | Lift + glow | translateY(-8px) + box-shadow dorado |
| Galería hover | Zoom + caption | scale(1.05) + caption fade-in |
| Timeline | Line draw | scaleY animado con scroll |
| Nav links | Underline | pseudo-elemento ::after, width 0→100% |
| Mobile menu | Slide | toggle class .active, display flex/none |
| Smooth scroll | Native | `scroll-behavior: smooth` en html |

---

## Responsive

### Desktop (>1024px)
- Layout completo, 3-4 columnas
- Navbar horizontal visible
- Hero con imagen full

### Tablet (768-1024px)
- 2 columnas donde aplique
- Galería 3 cols
- Comunidad 2 cols

### Mobile (<768px)
- Single column
- Hamburger menu
- Hero más compacto
- Galería 2 cols → 1 col en <480px
- Eventos: fecha en línea horizontal
- Footer: single column stacked

---

## Performance Checklist

- [ ] Imágenes en WebP con fallback JPG
- [ ] Lazy loading nativo (`loading="lazy"`)
- [ ] Google Fonts preconnect
- [ ] Animaciones solo con transform/opacity
- [ ] IntersectionObserver para scroll reveals
- [ ] CSS crítico inline, resto async
- [ ] Minificación de CSS/JS en producción

---

## SEO Meta Tags

```html
<title>Edificio Bertha — Arte · Música · Comunidad | Mexicali</title>
<meta name="description" content="Edificio histórico en Mexicali transformado en hub cultural. Galería de arte urbano, música en vivo y networking.">
<meta property="og:title" content="Edificio Bertha — Arte · Música · Comunidad">
<meta property="og:description" content="Edificio histórico en Mexicali. Galería de arte urbano, música en vivo y espacio de networking.">
<meta property="og:type" content="website">
<meta property="og:locale" content="es_MX">
```

---

## Assets Placeholders

Todas las imágenes actuales usan Unsplash como placeholder. **Reemplazar con fotos reales del cliente** antes del deploy.

| Sección | Placeholder URL | Reemplazar con |
|---------|-----------------|----------------|
| Hero bg | `photo-1518998053901-5348d3961a04` | Foto nocturna del edificio |
| Historia img | `photo-1486406146926-c627a92ad1ab` | Foto histórica B/N del edificio |
| Galería Urbana | `photo-1561214115-f2f134cc4912` | Interior galería con arte urbano |
| Escenario | `photo-1516450360452-9312f5e86fc7` | Concierto en vivo en el espacio |
| La Sala | `photo-1515187029135-18ee286d815b` | Evento de networking |
| Galería items | Varias Unsplash | Fotos reales de eventos pasados |
| Comunidad avatars | Varias Unsplash | Fotos reales de artistas/bandas |

---

## Notas para el Desarrollador (Claude Code)

1. El HTML es **single-file** con CSS embebido en `<style>` para simplicidad inicial.
2. Mover CSS a archivo externo (`styles.css`) para producción.
3. El JavaScript es mínimo (navbar scroll, mobile toggle, scroll reveal, calendario filter).
4. Todo el JS puede ir en un `<script>` al final del body o en `main.js`.
5. Las animaciones usan CSS keyframes + IntersectionObserver (no librerías externas necesarias).
6. Las imágenes placeholder deben reemplazarse antes del lanzamiento.
7. El formulario de contacto necesita backend (Formspree, Netlify Forms, o custom API).

---

**Versión:** 1.0  
**Fecha:** Mayo 2026  
**Próximo paso:** Wireframe en Figma → Aprobación cliente → Desarrollo
