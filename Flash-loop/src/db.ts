import { openDB } from 'idb';
import type { Word } from './types';

const DB_NAME = 'vocab-db';
const STORE_NAME = 'words';

export const dbPromise = openDB(DB_NAME, 3, {
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
    if (!db.objectStoreNames.contains('Achievement')) {
      db.createObjectStore('Achievement', {
        keyPath: 'id',
        autoIncrement: true
      });
    }
  },
});

export async function addWordToDB(word: Omit<Word, 'id'>) {
  const db = await dbPromise;
  await db.add(STORE_NAME, word);

  // เช็คและอัปเดต Achievement เมื่อเพิ่มคำใหม่
  const unlock = await getAllWordsFromDB();
  const currentWordCount = unlock.length; // เก็บจำนวนคำศัพท์ในตัวแปรเพื่อความสะดวก

  // เรียงลำดับการตรวจสอบจากมากไปน้อย
  if (currentWordCount >= 1000) {
    await UnlockAchievement(6); // ปลดล็อก Achievement ที่ 6 (id=6)
  } else if (currentWordCount >= 500) {
    await UnlockAchievement(5); // ปลดล็อก Achievement ที่ 5 (id=5)
  } else if (currentWordCount >= 100) {
    await UnlockAchievement(4); // ปลดล็อก Achievement ที่ 4 (id=4)
  } else if (currentWordCount >= 50) {
    await UnlockAchievement(3); // ปลดล็อก Achievement ที่ 3 (id=3)
  } else if (currentWordCount >= 10) {
    await UnlockAchievement(2); // ปลดล็อก Achievement ที่ 2 (id=2)
  } else if (currentWordCount >= 5) {
    await UnlockAchievement(1); // ปลดล็อก Achievement ที่ 1 (id=1)
  }
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


// Achievement functions
export interface AchievementTYPE {
  id?: number;
  name: string;
  description: string;
  progress: number;
  isUnlocked: boolean;
}
// ข้อมูล Achievement ทั้ง 6 ระดับ
const achievements: AchievementTYPE[] = [
  { name: 'Word Rookie', description: 'Learn 5 new words', isUnlocked: false , progress: 5 },
  { name: 'Word Hunter', description: 'Learn 10 new words', isUnlocked: false , progress: 10 },
  { name: 'Vocab Pro', description: 'Learn 50 new words', isUnlocked: false , progress: 50 },
  { name: 'Word Master', description: 'Learn 100 new words', isUnlocked: false , progress: 100 },
  { name: 'Lexicon Legend', description: 'Learn 500 new words', isUnlocked: false , progress: 500 },
  { name: 'Vocab Conqueror', description: 'Learn 1000 new words', isUnlocked: false , progress: 1000 },
];

export async function getAllAchievements(): Promise<AchievementTYPE[]> {
  const db = await dbPromise;
  return db.getAll('Achievement');
}
// ฟังก์ชันที่จะสร้างข้อมูล Achievement หากยังไม่มี
let isSetupRunning = false;

export async function setupAchievements() {
  if (isSetupRunning) {
    return; // ป้องกันการเรียกซ้ำซ้อน
  }
  isSetupRunning = true;

  try {
    const existingAchievements = await getAllAchievements();
    if (existingAchievements.length === 0) {
      const db = await dbPromise;
      const tx = db.transaction('Achievement', 'readwrite');
      const store = tx.store;

      // วนลูปเพื่อเพิ่ม Achievement แต่ละระดับลงในฐานข้อมูล
      for (const achievement of achievements) {
        await store.add(achievement);
      }

      await tx.done;
      console.log('All achievements have been created!');
    } else {
      console.log('Achievements already exist in the database.');
    }
  } finally {
    isSetupRunning = false;
  }
}
export async function UnlockAchievement(id: number) {
  const db = await dbPromise;
  const Achievement = await db.get('Achievement', id);
  if (Achievement) {
    Achievement.isUnlocked = true;
    await db.put('Achievement', Achievement);
  }
}
export async function resetAchievement(id: number) {
  const db = await dbPromise;
  const Achievement = await db.get('Achievement', id);
  if (Achievement) {
    Achievement.isUnlocked = false;
    await db.put('Achievement', Achievement);
  }
}
export async function deleteAchievement(id: number) {
  const db = await dbPromise;
  await db.delete('Achievement', id);
}