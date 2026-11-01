// Base URL of the AppDrop backend API (appdrop-be).
// Read from the build-time env var API_BASE_URL (already set on the landing
// Vercel project; exposed to the client via `envPrefix` in vite.config.ts).
// Defaults to prod on purpose: a build with API_BASE_URL unset, empty or
// whitespace-only must still produce a working appdrop.co (see TASK-029).
const rawApiBaseUrl: string =
  import.meta.env.API_BASE_URL?.trim() || "https://api.appdrop.co";

export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");
