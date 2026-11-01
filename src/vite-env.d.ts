/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPDROP_BUILDER_URL?: string;
  readonly VITE_APPDROP_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
