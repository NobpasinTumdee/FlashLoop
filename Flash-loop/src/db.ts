import { openDB } from 'idb';
import type { Word } from './types';

const DB_NAME = 'vocab-db';
const STORE_NAME = 'words';

export const dbPromise = openDB(DB_NAME, 2, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      const store = db.createObjectStore(STORE_NAME, {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('english', 'english');
    }
    if (!db.objectStoreNames.contains('usage')) {
      db.createObjectStore('usage', { keyPath: 'key' }); // สำหรับเก็บ streak/lastVisit
    }
  },
});

export async function addWordToDB(word: Omit<Word, 'id'>) {
  const db = await dbPromise;
  await db.add(STORE_NAME, word);
}

export async function getAllWordsFromDB(): Promise<Word[]> {
  const db = await dbPromise;
  return db.getAll(STORE_NAME);
}

export async function incrementReviewCount(id: number) {
  const db = await dbPromise;
  const word = await db.get(STORE_NAME, id);
  if (word) {
    word.reviewCount += 1;
    await db.put(STORE_NAME, word);
  }
}

export async function deleteWord(id: number) {
  const db = await dbPromise;
  await db.delete(STORE_NAME, id);
}
