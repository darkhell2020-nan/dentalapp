import type { LanguageMode,TextPair } from '../types/content';
export const text=(t:TextPair,l:LanguageMode)=>l==='en'?t.en:l==='bm'?t.bm:`${t.en} / ${t.bm}`;
