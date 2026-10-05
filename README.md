# Jaytech

Personal website for Javier Alva (Jaytech) — Systems Administrator, Developer and AI Specialist.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Vercel Analytics

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

The project is designed for deployment on Vercel.

Geist and Geist Mono are self-hosted from the official `geist` package (1.7.2)
so builds do not require Google Fonts access. The font license is included in
`app/fonts/LICENSE.txt`.

Before publishing, confirm that `hello@jaytech.dev` receives mail. No production
site URL is assumed; configure canonical and Open Graph URLs once the public
deployment domain is confirmed.
