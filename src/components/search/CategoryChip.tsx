import type { ReactNode } from 'react';
export function CategoryChip({children,active=false,href}:{children:ReactNode;active?:boolean;href?:string}){const cls=`chip ${active?'chip-active':''}`;return href?<a className={cls} href={href}>{children}</a>:<span className={cls}>{children}</span>}
