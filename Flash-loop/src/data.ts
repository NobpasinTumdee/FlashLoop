import type { Word } from './types';

export let words: Word[] = [];

export function addWord(word: Omit<Word, 'id' | 'reviewCount'>) {
  words.push({
    id: Date.now(),
    reviewCount: 0,
    ...word
  });
}

export function getWords() {
  return words;
}

export function incrementReview(id: number) {
  const word = words.find(w => w.id === id);
  if (word) word.reviewCount += 1;
}
