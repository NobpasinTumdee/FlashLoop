export type WordType = 'noun' | 'verb' | 'adjective' | 'adverb';

export interface Word {
  id: number;
  english: string;
  thai: string;
  type: WordType;
  reviewCount: number;
}
