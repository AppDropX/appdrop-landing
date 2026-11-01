# AppDrop Landing Page

Marketing site for [AppDrop](https://appdrop.io) — a no-code mobile app builder for Shopify stores.

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Local development

```sh
npm install
npm run dev
```

The dev server runs at `http://localhost:8080`.

## Build

```sh
npm run build
npm run preview
```

### Environment config

`src/lib/urls.ts` reads `VITE_APPDROP_BUILDER_URL` for the dashboard/builder
link, defaulting to the staging builder (`https://builder.test.appdrop.co/login`)
when unset. Staging builds (Vercel) require no changes.

Production builds must set the builder URL explicitly:

```sh
VITE_APPDROP_BUILDER_URL=https://builder.appdrop.co/login npm run build
```

`src/lib/api.ts` reads `VITE_APPDROP_API_URL`, the base URL of the AppDrop API
(`appdrop-be`). The Book Demo modal and the Contact page form both
`POST {VITE_APPDROP_API_URL}/api/public/contact-submissions`. It defaults to
**prod** (`https://api.appdrop.co`) when unset, so a build without it still
captures leads. A trailing slash is stripped.

| Environment | `VITE_APPDROP_API_URL` |
|-------------|------------------------|
| Production (default) | `https://api.appdrop.co` |
| Preview / staging | `https://api.staging.appdrop.co` |
| Local backend | `http://localhost:8080` |

```sh
VITE_APPDROP_API_URL=http://localhost:8080 npm run dev
```

## Deploy

Build the project and deploy the `dist` folder to your hosting provider.
