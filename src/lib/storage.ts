import type { LanguageMode } from '../types/content';
const read=(k:string):string[]=>JSON.parse(localStorage.getItem(k)||'[]');const write=(k:string,v:string[])=>localStorage.setItem(k,JSON.stringify(v));
export const getFav=()=>read('dv:favourites');export const toggleFav=(id:string)=>{const s=new Set(getFav());s.has(id)?s.delete(id):s.add(id);write('dv:favourites',[...s]);return [...s]};
export const getRecent=()=>read('dv:recent');export const addRecent=(id:string)=>write('dv:recent',[id,...getRecent().filter(x=>x!==id)].slice(0,8));export const clearRecent=()=>write('dv:recent',[]);
export const getLang=():LanguageMode=>(localStorage.getItem('dv:lang') as LanguageMode)||'both';export const setLang=(l:LanguageMode)=>localStorage.setItem('dv:lang',l);
