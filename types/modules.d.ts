declare module tinymask {
  interface TinyMask {
    mask(value: number | string): string;
  }
  export function TinyMask(pattern: string, options: { translation: any, invalidValues: any }): void;
}