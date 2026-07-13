import type { TopicCategory } from '../types/content';
export const categories:{id:TopicCategory;name:string;bm:string;items:string[]}[]=[
{id:'conditions',name:'Conditions',bm:'Keadaan',items:['Dental caries','Deep caries','Cracked tooth','Dental abscess','Gingivitis','Periodontitis','Gum recession','Impacted wisdom tooth']},
{id:'treatments',name:'Treatments',bm:'Rawatan',items:['Scaling and polishing','Dental filling','Root canal treatment','Tooth extraction','Wisdom-tooth surgery','Dental crown','Dental bridge','Dental implant','Teeth whitening','Dental veneer']},
{id:'dentures',name:'Dentures and appliances',bm:'Gigi palsu & alat',items:['Acrylic denture','Chrome cobalt denture','Flexible denture','Full denture','Partial denture','Conventional braces','Self-ligating braces','Clear aligners','Orthodontic retainer']},
{id:'materials',name:'Materials',bm:'Bahan',items:['Composite resin','Glass ionomer cement','Zirconia','Porcelain-fused-to-metal','Lithium disilicate','Acrylic','Chrome cobalt','Titanium implant']},
{id:'comparisons',name:'Comparisons',bm:'Perbandingan',items:['Filling versus crown','Root canal treatment versus extraction','Bridge versus implant','Acrylic versus chrome cobalt denture','Acrylic versus flexible denture','Zirconia versus porcelain-fused-to-metal crown','Braces versus clear aligners']}];
export const categoryLabel=(id:TopicCategory)=>categories.find(c=>c.id===id)?.name??id;
