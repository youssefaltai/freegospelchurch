# Free Gospel Church of Culpeper, Inc.

Next.js site for Free Gospel Church of Culpeper.

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
pnpm build
pnpm start
```

## Docker

Build and run with Docker (port 3000):

```bash
docker compose up -d --build
```

The image uses a multi-stage build: installs dependencies, runs `next build`, then runs `next start` in a minimal runtime image.

## Project layout

- `app/` — Next.js App Router (pages, layout, components, styles)
- `public/` — Static assets (images under `public/assets/`)
