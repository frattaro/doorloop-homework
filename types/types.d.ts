export type Nullable<T> = T | null;

export interface WordEntry {
  word: string;
  state: TypographyPropsVariantOverrides;
  input: string;
}
