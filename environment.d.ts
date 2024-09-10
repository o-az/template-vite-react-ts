interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'test' | 'production'
  readonly PORT: string
  readonly NODE_OPTIONS: string
}

// Node.js environment variables types
declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}

// Vite environment variables types
interface ImportMetaEnv extends EnvironmentVariables {}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
