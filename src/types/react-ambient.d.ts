declare module 'react' {
  export type ReactNode = unknown;
  export interface StrictModeProps { children?: ReactNode }
  export const StrictMode: (props: StrictModeProps) => JSX.Element;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((previous: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;
  export function useRef<T>(initialValue: T): { current: T };
  export interface PointerEvent<T = Element> { currentTarget: T; target: EventTarget; clientX: number; clientY: number; pointerId: number }
}

declare module 'react/jsx-runtime' {
  export namespace JSX {
    interface Element {}
    interface IntrinsicAttributes { key?: any }
    interface IntrinsicElements { [elemName: string]: any }
  }
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: Element | DocumentFragment): { render(children: unknown): void };
}

declare namespace React {
  type ReactNode = unknown;
  interface PointerEvent<T = Element> { currentTarget: T; target: EventTarget; clientX: number; clientY: number; pointerId: number }
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicAttributes { key?: any }
    interface IntrinsicElements { [elemName: string]: any }
}
