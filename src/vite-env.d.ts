/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPDROP_BUILDER_URL?: string;
  readonly API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
