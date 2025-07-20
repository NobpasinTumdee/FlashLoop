import { useEffect, useState } from 'react';
import type { Word } from '../types';
import { getAllWordsFromDB, incrementReviewCount } from '../db';

export default function ReviewWords() {
  const [words, setWords] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllWordsFromDB().then(setWords);
  }, []);

  const handleNext = async () => {
    if (words[index]) {
      await incrementReviewCount(words[index].id);
      const updated = await getAllWordsFromDB();
      setWords(updated);
      setIndex((prev) => (prev + 1) % updated.length);
    }
  };

  if (words.length === 0) {
    return <p>ยังไม่มีคำศัพท์ กรุณาเพิ่มก่อน</p>;
  }

  const word = words[index];

  return (
    <div>
      <h2>ทบทวนคำศัพท์</h2>
      <p>อังกฤษ: <strong>{word.english}</strong></p>
      <p>แปล: {word.thai}</p>
      <p>ประเภท: {word.type}</p>
      <p>ทบทวนแล้ว: {word.reviewCount} ครั้ง</p>
      <button onClick={handleNext}>คำต่อไป</button>
    </div>
  );
}
