export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition' | 'conjunction' | 'interjection' | 'other';

export const WordTypearray: { EN: string, TH: string }[] = [
  { EN: 'noun', TH: 'คำนาม' },
  { EN: 'verb', TH: 'คำกริยา' },
  { EN: 'adjective', TH: 'คำคุณศัพท์' },
  { EN: 'adverb', TH: 'คำกริยาวิเศษณ์' },
  { EN: 'pronoun', TH: 'คำสรรพนาม' },  
  { EN: 'preposition', TH: 'คำบุพบท' },
  { EN: 'conjunction', TH: 'คำสันธาน' },
  { EN: 'interjection', TH: 'คำอุทาน' },
  { EN: 'other', TH: 'อื่นๆ' }
];
// noun is a person, place, or thing คำนามนาม
// pronoun is a word that replaces a noun คำสรรพนาม
// verb is an action word คำกริยา
// adjective is a word that describes a noun คำคุณศัพท์
// adverb is a word that describes a verb, adjective, or other adverb คำกริยาวิเศษณ์
// preposition is a word that shows the relationship between a noun (or pronoun) and คำบุพบท
// conjunction is a word that connects words, phrases, or clauses คำเชื่อม
// interjection is a word of emphasis or exclamation คำอุทาน
// other is a word that doesn't fit into any of the above categories อื่นๆ

export interface Word {
  id: number;
  english: string;
  thai: string;
  type: WordType;
  reviewCount: number;
}
