# La Rioja Turismo — Sitio Oficial

Sitio web de turismo oficial de La Rioja, Argentina. Stack: **Next.js 15 · React · TypeScript · TailwindCSS · Framer Motion**.

---

## Estructura del Proyecto

```
larioja-turismo/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales, variables CSS, animaciones
│   │   ├── layout.tsx           # Root layout con metadata SEO + Navbar + Footer
│   │   ├── page.tsx             # Homepage (ensambla todas las secciones)
│   │   ├── loading.tsx          # Loading skeleton
│   │   └── not-found.tsx        # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Nav transparente → sólida en scroll, dropdown, búsqueda
│   │   │   └── Footer.tsx       # Footer completo con links, redes, newsletter
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Hero full-viewport con parallax y categorías
│   │       ├── ExperiencesSection.tsx   # 3 cards: Enoturismo, Gastronomía, Naturaleza
│   │       ├── WineRoutesSection.tsx    # Mapa SVG animado con rutas del vino
│   │       ├── TravelPlanSection.tsx    # 4 cards: Dormir, Eventos, Llegar, Oficinas
│   │       └── InstagramSection.tsx     # Galería de fotos con overlay hover
│   ├── lib/
│   │   └── utils.ts             # cn() helper, formatDate()
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── public/                      # Assets estáticos
├── next.config.ts               # Config Next.js con domains de imágenes
├── tailwind.config.ts           # Paleta custom: rioja.burgundy, gold, cream, etc.
├── vercel.json                  # Headers de seguridad
└── tsconfig.json
```

---

## Setup Local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build y Deploy

```bash
npm run build    # Verificar que compila sin errores
npm start        # Preview de producción local
```

### Deploy a Vercel (recomendado)

```bash
npx vercel       # Primera vez: conecta repo
npx vercel --prod
```

O conectá el repositorio en [vercel.com](https://vercel.com) para deploy automático en cada push.

---

## Paleta de Colores

| Token | Color | Uso |
|-------|-------|-----|
| `rioja-burgundy` | `#6B1A2A` | Primario, botones, acentos |
| `rioja-darkburgundy` | `#4A0F1C` | Fondos oscuros |
| `rioja-gold` | `#C4952A` | Labels, iconos, detalles |
| `rioja-cream` | `#F5EDD6` | Fondos claros |
| `rioja-earth` | `#3D2B1F` | Texto principal |

---

## Fuentes

- **Playfair Display** — Display / Headings (serif elegante)
- **Cormorant Garamond** — Acentos tipográficos
- **Jost** — Cuerpo de texto y UI

---

## SEO

- Metadata completa: title, description, keywords, OG, Twitter Card
- JSON-LD schema TouristDestination
- Canonical URL configurado
- Robots.txt
- Viewport y theme-color dinámicos
- Alt text en todas las imágenes

## Accesibilidad (WCAG AA)

- Skip to main content link
- Roles ARIA en nav, dialog, listbox, status
- focus-visible en todos los elementos interactivos
- Contraste validado en texto sobre fondos
- aria-label en iconos y links ambiguos

---

## Variables de Entorno

No se requieren variables de entorno para el core del sitio.

Para funcionalidades adicionales (Analytics, Newsletter API, etc.):

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEWSLETTER_API_KEY=your-key-here
```

---

## Performance

- Imágenes con `next/image` (avif/webp automático)
- Fuentes preconnect + display=swap
- CSS crítico inline via Tailwind
- Lazy loading en secciones off-screen
- Framer Motion con `useInView` para animar solo elementos visibles
