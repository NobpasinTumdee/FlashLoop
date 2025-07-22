import { dbPromise } from './db';

function getToday(): string {
  const now = new Date();
  const offsetMs = 7 * 60 * 60 * 1000; // GMT+7
  const thaiDate = new Date(now.getTime() + offsetMs);
  return thaiDate.toISOString().split('T')[0];
}


function isYesterday(dateString: string): boolean {
  const today = new Date(getToday());
  const last = new Date(dateString);
  const diff = today.getTime() - last.getTime();
  return diff / (1000 * 60 * 60 * 24) === 1;
}

export async function updateStreak(): Promise<number> {
  const db = await dbPromise;
  const lastVisit = await db.get('usage', 'lastVisit');
  const streakObj = await db.get('usage', 'streak');
  const today = getToday();

  let streak = streakObj?.value ?? 0;

  if (lastVisit?.value === today) {
    return streak; // เข้ามาวันเดียวกัน ไม่เปลี่ยน streak
  }

  if (isYesterday(lastVisit?.value)) {
    streak += 1;
  } else {
    streak = 1;
  }

  await db.put('usage', { key: 'lastVisit', value: today });
  await db.put('usage', { key: 'streak', value: streak });

  return streak;
}

export async function getStreak(): Promise<number> {
  const db = await dbPromise;
  const streak = await db.get('usage', 'streak');
  return streak?.value ?? 0;
}

export async function resetStreak() {
  const db = await dbPromise;
  await db.delete('usage', 'streak');
  await db.delete('usage', 'lastVisit');
}

export async function fakeLastVisit(date: string) {
  const db = await dbPromise;
  await db.put('usage', { key: 'lastVisit', value: date });
}
