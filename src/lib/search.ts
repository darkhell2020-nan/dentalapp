import { topics } from '../data/topics';
const norm=(s:string)=>s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
export function searchTopics(q:string){const n=norm(q);if(!n)return topics;return topics.filter(t=>[t.titles.en,t.titles.bm,t.shortDescription.en,t.shortDescription.bm,...t.keywords].some(v=>norm(v).includes(n)||n.includes(norm(v))));}
