import { useEffect, useState } from 'react';
import type { Word } from '../types';
import { deleteWord, getAllWordsFromDB, incrementReviewCount } from '../db';
import './page.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { message } from 'antd';
import { Link } from 'react-router-dom';


export default function ReviewWords() {
  const [words, setWords] = useState<Word[]>([]);
  const [index, setIndex] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  const warning = () => {
    messageApi.open({
      type: 'warning',
      content: 'I remember now. Yay!',
    });
  };

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

  const handleDelete = async () => {
    if (words[index]) {
      await deleteWord(words[index].id)
      const updated = await getAllWordsFromDB();
      setWords(updated);
      setIndex((prev) => (prev + 1) % updated.length);
      await warning();
    }
  }

  if (words.length === 0) {
    return (
      <>
        <div style={{ textAlign: 'center' }}>
          <h2>There are no words yet. Please add them first.</h2>
          <img width={200} src="https://media.tenor.com/Rp0U7bdOhSUAAAAi/anime.gif" alt="Anime" />
        </div>
        <div style={{width:'100%',textAlign:'center'}}>
          <Link to={"/add"} style={{textDecoration:'none',color:'black'}}>GO GO GO!</Link>
        </div>
      </>
    );
  }

  const word = words[index];

  return (
    <>
      {contextHolder}
      <div className='group-Review'>
        <h2 data-aos="fade-down">Review vocabulary</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }} data-aos="flip-left">
          <div className="card">
            <div className="card-inner">
              <div className="card-front">
                <h1>{word.english}</h1>
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
          <button className='btn' style={{ color: 'red' }} onClick={handleDelete}>Remove</button>
        </div>
      </div>
    </>
  );
}
