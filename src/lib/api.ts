// Base URL of the AppDrop backend API (appdrop-be).
// Defaults to prod on purpose: a build without VITE_APPDROP_API_URL must still
// produce a working appdrop.co (see TASK-029).
const rawApiBaseUrl: string =
  import.meta.env.VITE_APPDROP_API_URL || "https://api.appdrop.co";

export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");
