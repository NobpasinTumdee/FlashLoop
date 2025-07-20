import { useEffect, useState } from 'react';
import type { WordType } from '../types';
import { addWordToDB } from '../db';
import './page.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { message } from 'antd';


export default function AddWord() {
  const [english, setEnglish] = useState('');
  const [thai, setThai] = useState('');
  const [type, setType] = useState<WordType>('noun');
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Yay! Very good!',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addWordToDB({ english, thai, type, reviewCount: 0 });
    setEnglish('');
    setThai('');
    await success();
  };

  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <>
      {contextHolder}
      <div className='main-form'>
        <form onSubmit={handleSubmit} className='Add-form'>
          <h2>Add Vocabulary</h2>
          <div className='group-input'>
            <input
              type="text"
              placeholder="English"
              value={english}
              onChange={e => setEnglish(e.target.value)}
              required
              className='inputADD'
              data-aos="fade-up" data-aos-duration="1000"
            />
            <input
              type="text"
              placeholder="Thai"
              value={thai}
              onChange={e => setThai(e.target.value)}
              required
              className='inputADD'
              data-aos="fade-up" data-aos-duration="2000"
            />
          </div>
          <select value={type} onChange={e => setType(e.target.value as WordType)} className='select-ADD' data-aos="fade-up" data-aos-duration="2500">
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
            <option value="adverb">Adverb</option>
          </select>
          <button type="submit" className='button-from' data-aos="zoom-in" data-aos-duration="2500">Add Vocabulary</button>
        </form>
      </div>
    </>
  );
}
