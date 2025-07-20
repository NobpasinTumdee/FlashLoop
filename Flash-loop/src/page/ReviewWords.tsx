import { useEffect, useState } from 'react';
import type { Word } from '../types';
import { getAllWordsFromDB, incrementReviewCount } from '../db';
import './page.css'
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function ReviewWords() {
  const [words, setWords] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getAllWordsFromDB().then(setWords);
    Aos.init({
      duration: 500,
      once: true,
    });
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
    <>
      <div className='group-Review'>
        <h2 data-aos="fade-down">Review vocabulary</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }} data-aos="flip-up">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <p>{word.english}</p>
                <p>{word.type}</p>
              </div>
              <div className="card-back">
                <p>{word.thai}</p>
                <p>{word.type}</p>
                <p>{word.reviewCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '20px' }} data-aos="fade-up">
          <button className='btn' onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}
