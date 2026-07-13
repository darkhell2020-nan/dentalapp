export type LanguageMode='en'|'bm'|'both';export type TopicCategory='conditions'|'treatments'|'dentures'|'materials'|'comparisons';
export type TextPair={en:string;bm:string};export type CardType='overview'|'anatomy'|'process'|'indications'|'comparison';
export type IllustrationLabel={id:string;text:TextPair;x:number;y:number};
export type TopicCard={id:string;type:CardType;titles:TextPair;descriptions?:TextPair;illustrationId:string;labels?:IllustrationLabel[];bullets?:{en:string[];bm:string[]};disclaimer?:TextPair};
export type Topic={id:string;slug:string;category:TopicCategory;titles:TextPair;shortDescription:TextPair;keywords:string[];cards:TopicCard[];relatedTopicIds:string[];developerNote:string};
