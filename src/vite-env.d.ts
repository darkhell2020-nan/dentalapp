interface ImportMetaEnv {
  readonly BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = unknown>(pattern: string, options?: { eager?: boolean; query?: string; import?: string }): Record<string, T>;
}

declare module '*.css';
declare module '*.svg' {
  const src: string;
  export default src;
}
