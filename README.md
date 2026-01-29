## p.mss.io – Password Generator

This repo contains the Next.js app that powers the `p.mss.io` password generator.  
Authenticated users can generate secure passwords via a simple web UI.

### Tech stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript / React
- **Auth**: `@workos-inc/authkit-nextjs`
- **Styling**: Tailwind CSS
- **Tooling**: Biome for linting/formatting
- **Package manager**: **pnpm**

## Requirements

- **Node.js** (LTS recommended)
- **pnpm**: install globally if you don’t already have it:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Setup

1. **Install dependencies** with `pnpm`:

```bash
pnpm install
```

2. **Environment variables**

   - Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

   - Fill in the required values for your WorkOS / auth configuration and any other secrets.

## Development

Run the dev server:

```bash
pnpm dev
```

Then open `http://localhost:3000` in your browser.

Useful scripts:

- **Start dev server**: `pnpm dev`
- **Build for production**: `pnpm build`
- **Start production server**: `pnpm start`
- **Lint**: `pnpm lint`
- **Format**: `pnpm format`

## Deployment

This app is designed to run as a standard Next.js project.  
You can deploy it to any Next.js-compatible platform (e.g. Vercel) using your usual build and deploy pipeline:

- **Build**: `pnpm build`
- **Start**: `pnpm start`

