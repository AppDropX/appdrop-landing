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

## Deploy

Build the project and deploy the `dist` folder to your hosting provider.
