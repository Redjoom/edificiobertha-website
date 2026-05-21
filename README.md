# 🏛️ Edificio Bertha — Landing Page

> **Edificio histórico en Mexicali** transformado en hub cultural: galería de arte urbano, espacio de música en vivo para bandas originales, y centro de networking para la comunidad creativa.

---

## 📌 Contexto del Proyecto

**Cliente:** Edificio Bertha (Mexicali, Baja California, México)  
**Tipo de proyecto:** Landing page / sitio web institucional  
**Stack sugerido:** HTML5 + CSS3 + Vanilla JS (listo para migrar a React/Vue/Astro)  
**Diseño:** Mobile-first, single-page con secciones ancladas  

---

## 🎯 Objetivos del Sitio

1. **Contar la historia del edificio** — El patrimonio arquitectónico histórico como diferenciador único.
2. **Presentar los 3 pilares** — Arte urbano, música en vivo, networking/events.
3. **Convertir visitantes en asistentes** — Calendario de eventos, newsletter, redes sociales.
4. **Atraer colaboraciones** — Artistas, bandas, organizadores de eventos, patrocinadores.
5. **Reflejar la identidad de Mexicali** — Calor desértico, creatividad cruda, comunidad underground.

---

## 🏗️ Arquitectura de la Página

| Sección | Propósito | Referencia NYC |
|---------|-----------|----------------|
| **Hero** | Impacto inmediato: edificio + propuesta de valor | The Shed (transformación arquitectónica) |
| **Historia** | Storytelling del edificio histórico | Pioneer Works (edificio del s. XIX adaptado) |
| **Espacios** | Los 3 pilares: Arte / Música / Networking | Pioneer Works (multi-espacio) |
| **Calendario** | Próximos eventos, exposiciones, conciertos | David Zwirner (limpieza editorial) |
| **Galería** | Fotos del edificio, arte urbano, eventos pasados | The Future Perfect ("experiencia visual") |
| **Comunidad** | Testimonios, artistas residentes, colaboradores | Pioneer Works ("museum of process") |
| **Contacto / Visita** | Dirección, horarios, mapa, formulario | — |
| **Footer** | Redes, newsletter, créditos | — |

---

## 🎨 Paleta de Colores

```
--color-bg-primary:    #0A0A0A    /* Negro carbón - fondos principales */
--color-bg-secondary:  #141414    /* Negro suave - secciones alternas */
--color-accent:        #D4A853    /* Dorado desértico - acentos, CTAs */
--color-accent-warm:   #C75B2E    /* Terracota Mexicali - toques de calor */
--color-text-primary:  #F5F0E8    /* Blanco hueso - texto principal */
--color-text-muted:    #8A8A8A    /* Gris medio - captions, metadata */
--color-border:        #2A2A2A    /* Bordes sutiles */
```

> **Racional:** El negro profundo evoca la noche (eventos, música, galería). El dorado desértico conecta con el paisaje de Mexicali y el patrimonio. La terracota añade calor humano. El blanco hueso es más cálido que el blanco puro.

---

## 🔤 Tipografía

| Uso | Fuente | Peso | Notas |
|-----|--------|------|-------|
| **Display / H1-H2** | Space Grotesk | 700 | Geométrica, moderna, con carácter |
| **Body / Texto** | Inter | 400-500 | Legible, neutral, excelente en pantalla |
| **Accent / Labels** | JetBrains Mono | 400 | Monospace para etiquetas, fechas, metadata |

> Ambas fuentes disponibles gratuitamente en Google Fonts.

---

## 📐 Decisiones de Diseño Clave

### 1. Hero Section: "El Edificio Habla"
- Video o imagen full-screen del edificio por la noche (iluminación cálida, arte urbano visible).
- Tipografía grande, minimalista: "EDIFICIO BERTHA" como marca principal.
- Subtítulo: "Arte. Música. Comunidad. Desde 19XX." (año de construcción del edificio).
- CTA dual: "Ver Calendario" + "Conocer la Historia".

### 2. Historia: "Rescatado del Tiempo"
- Layout asimétrico: imagen histórica del edificio (B/N) + texto.
- Timeline vertical sutil que marca hitos: construcción, abandono, rescate, renacimiento cultural.
- Frase clave: *"Lo que fue fábrica/negocio/residencia, ahora es casa de la cultura."*

### 3. Espacios: "Tres Almas, Un Solo Latido"
- Grid de 3 columnas en desktop, stacked en mobile.
- Cada pilar tiene:
  - Icono distintivo
  - Imagen representativa
  - Título (ej: "Galería Urbana")
  - Descripción corta
  - CTA a sub-página o calendario filtrado
- Hover effects sutiles: imagen se oscurece, texto aparece.

### 4. Calendario: "Siempre Hay Algo"
- Lista vertical de eventos con:
  - Fecha (monospace, grande)
  - Tipo de evento (badge de color)
  - Título
  - Hora / Lugar
- Filtros por categoría: Arte / Música / Networking / Todos.

### 5. Galería: "Lo Que Ocurre Aquí"
- Masonry grid o carrusel horizontal.
- Fotos de: murales, conciertos, eventos de networking, el edificio mismo.
- Lazy loading para performance.

### 6. Comunidad: "Los Que Lo Hacen Posible"
- Grid de artistas/bandas residentes con foto + nombre + disciplina.
- Testimonios cortos en formato tarjeta.
- CTA: "¿Quieres colaborar?"

### 7. Contacto: "Encuéntranos"
- Mapa embebido (Google Maps o Leaflet).
- Dirección completa con horarios.
- Formulario simple: Nombre, Email, Asunto, Mensaje.
- Redes sociales con iconos grandes.

---

## ⚡ Interacciones y Animaciones

| Elemento | Animación | Trigger |
|----------|-----------|---------|
| Hero text | Fade-up + blur-in | On load |
| Secciones | Fade-in + translateY(30px→0) | Scroll (IntersectionObserver) |
| Espacios cards | Scale(1.02) + overlay text | Hover |
| Timeline | Línea vertical que se dibuja | Scroll |
| Galería | Lazy fade-in | Scroll into view |
| Navbar | Background transparent → solid | Scroll > 100px |
| Smooth scroll | Scroll-behavior: smooth | Click en nav links |

> **Performance:** Todas las animaciones usan `transform` y `opacity` (GPU-accelerated). No animar `width`, `height`, `margin`, `top`.

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px   (single column, hamburger nav)
Tablet:   768px - 1024px  (2 columns where applicable)
Desktop:  > 1024px  (full layout, 3 columns, sidebar nav)
```

---

## 🔧 Stack Técnico Recomendado

### Opción A: Static (Inmediata)
- HTML5 + CSS3 (Flexbox/Grid)
- Vanilla JavaScript (IntersectionObserver, smooth scroll)
- Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- Imágenes: WebP con fallback JPG, lazy loading nativo

### Opción B: Framework (Escalable)
- Astro / Next.js / Nuxt
- Tailwind CSS (para rapidez)
- Framer Motion o GSAP (animaciones avanzadas)
- CMS headless: Sanity o Strapi (para calendario de eventos)

---

## 📝 Assets Necesarios del Cliente

1. **Fotos del edificio:**
   - Exterior día y noche
   - Interior (galería, escenario, área de networking)
   - Detalles arquitectónicos históricos
   - Fotos antiguas del edificio (para sección Historia)

2. **Fotos de eventos pasados:**
   - Exposiciones de arte urbano
   - Conciertos en vivo
   - Eventos de networking
   - Murales y street art

3. **Información textual:**
   - Historia completa del edificio (fechas, dueños originales, uso histórico)
   - Biografías de artistas/bandas residentes
   - Descripción de cada espacio (capacidad, equipamiento, servicios)
   - Próximos eventos (título, fecha, descripción, artista/banda)

4. **Branding:**
   - Logo de Edificio Bertha (si existe)
   - Tipografía institucional (si aplica)
   - Colores corporativos (si aplica)

---

## 🚀 Próximos Pasos

1. [ ] Revisar y aprobar este brief con el cliente
2. [ ] Recopilar assets fotográficos y textuales
3. [ ] Definir nombre de dominio y hosting
4. [ ] Wireframe de baja fidelidad (Figma/Whimsical)
5. [ ] Diseño visual de alta fidelidad (Figma)
6. [ ] Desarrollo del HTML/CSS/JS
7. [ ] Testing responsive y performance
8. [ ] Deploy y configuración de SEO básico
9. [ ] Integración de analytics (Google Analytics 4 o Plausible)

---

## 📎 Referencias de Inspiración

- [The Shed NYC](https://www.theshed.org/) — Centro cultural multimodal
- [Pioneer Works](https://pioneerworks.org/) — Edificio histórico adaptado (Brooklyn)
- [David Zwirner](https://www.davidzwirner.com/) — Galería con navegación editorial limpia
- [The Future Perfect](https://www.surfacemag.com/the-list/profile/the-future-perfect/) — Galería de diseño contemporáneo
- [Krause Gallery](https://www.singulart.com/en/art-galleries/united-states/new-york-14223) — Street art en NYC

---

**Autor:** [Tu nombre]  
**Fecha:** Mayo 2026  
**Versión:** 1.0  
**Estado:** Brief aprobado — Listo para wireframe
