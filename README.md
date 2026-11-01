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

`src/lib/api.ts` reads `API_BASE_URL`, the base URL of the AppDrop API
(`appdrop-be`). This is the name already set on the landing Vercel project; it
has no `VITE_` prefix, so `vite.config.ts` adds it to `envPrefix`
(`["VITE_", "API_BASE_URL"]`) to expose it to client code. The Book Demo modal
and the Contact page form both
`POST {API_BASE_URL}/api/public/contact-submissions`. It defaults to **prod**
(`https://api.appdrop.co`) when unset, empty or whitespace-only, so a build
without it still captures leads. A trailing slash is stripped.

| Environment | `API_BASE_URL` |
|-------------|----------------|
| Production (default) | `https://api.appdrop.co` |
| Preview / staging | `https://api.staging.appdrop.co` |
| Local backend | `http://localhost:<backend port>` |

Note that this site's dev server listens on port 8080, which is also the
backend's default `PORT`, so run the backend on another port locally:

```sh
API_BASE_URL=http://localhost:8081 npm run dev
```

Anything set as `API_BASE_URL` ends up in the public JS bundle; never put a
secret in it.

## Deploy

Build the project and deploy the `dist` folder to your hosting provider.
