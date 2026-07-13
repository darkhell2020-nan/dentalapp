import type { ReactNode } from 'react';
export function SectionHeading({title,subtitle,action}:{title:string;subtitle?:string;action?:ReactNode}){return <div className="mb-4 flex items-end justify-between gap-4"><div><h2 className="text-xl font-black tracking-[-0.02em] text-[#172033]">{title}</h2>{subtitle&&<p className="mt-1 text-sm text-slate-500">{subtitle}</p>}</div>{action}</div>}
