import { useEffect,useState } from 'react';
export function useLocalState<T>(read:()=>T, write:(v:T)=>void){const [v,setV]=useState<T>(()=>read());useEffect(()=>write(v),[v]);return [v,setV] as const;}
