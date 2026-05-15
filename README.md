# Rosalie Beauty — Tienda (Next.js)

Frontend e-commerce de cosmética natural: **Next.js 16** (App Router), TypeScript, Tailwind CSS 4, Framer Motion, carrito con Context + `localStorage`, imágenes con `next/image`.

- **Repositorio:** [github.com/abde7h/nextjs](https://github.com/abde7h/nextjs)
- **Rama principal:** `main`

## Requisitos

- Node.js 18+
- [pnpm](https://pnpm.io/)

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
pnpm build
pnpm start
```

## Estructura relevante

- `app/` — rutas (`/`, `/products/[id]`)
- `components/` — UI (Navbar, Hero, carrito, grid, etc.)
- `context/CartContext.tsx` — estado del carrito
- `lib/products.ts` — datos de productos
- `public/products/` — fotografías de producto
- `public/rosalie-logo.png` — marca

## Enlaces en footer

- Instagram y TikTok configurados en `components/Footer.tsx`.

---

Plantilla base: [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
