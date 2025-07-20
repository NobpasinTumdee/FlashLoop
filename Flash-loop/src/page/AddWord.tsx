import { useState } from 'react';
import type { WordType } from '../types';
import { addWordToDB } from '../db';

export default function AddWord() {
  const [english, setEnglish] = useState('');
  const [thai, setThai] = useState('');
  const [type, setType] = useState<WordType>('noun');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addWordToDB({ english, thai, type, reviewCount: 0 });
    setEnglish('');
    setThai('');
    alert('เพิ่มคำศัพท์แล้ว');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>เพิ่มคำศัพท์ใหม่</h2>
      <input
        type="text"
        placeholder="คำศัพท์ภาษาอังกฤษ"
        value={english}
        onChange={e => setEnglish(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="คำแปลภาษาไทย"
        value={thai}
        onChange={e => setThai(e.target.value)}
        required
      />
      <select value={type} onChange={e => setType(e.target.value as WordType)}>
        <option value="noun">Noun</option>
        <option value="verb">Verb</option>
        <option value="adjective">Adjective</option>
        <option value="adverb">Adverb</option>
      </select>
      <button type="submit">เพิ่มคำ</button>
    </form>
  );
}
