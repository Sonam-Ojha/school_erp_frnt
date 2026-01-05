// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_SSO_URL: string
  readonly VITE_KEYCLOAK_LOGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}


