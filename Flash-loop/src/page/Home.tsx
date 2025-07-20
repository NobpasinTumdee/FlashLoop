import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import QR from '../assets/Click_it.jpg';
import type { Word } from '../types';
import { getAllWordsFromDB } from '../db';

const Home = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [donate, setdonte] = useState(false);

  useEffect(() => {
    getAllWordsFromDB().then(setWords);
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);


  return (
    <>
      <h1 data-aos="fade-down" style={{ textAlign: 'center' }}>Welcome to Flash Loop!</h1>
      <div style={{ textAlign: 'center', margin: '0 20%' }}>
        <h1 onClick={() => setdonte(!donate)} style={{ cursor: 'pointer' }}>Donate Me🍵</h1>
        {donate &&
          <>
            <img width={200} src={QR} alt="QR" />
            <p data-aos="fade-up" style={{ textAlign: 'center', margin: '0 20%' }}>
              We're no strangers to love You know the rules and so do I (Do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy
              I just wanna tell you how I'm feeling Gotta make you understand<br />
              Never gonna give you up<br />
              Never gonna let you down<br />
              Never gonna run around and desert you<br />
              Never gonna make you cry<br />
              Never gonna say goodbye<br />
              Never gonna tell a lie and hurt you<br />
              <br /><a href="https://github.com/NobpasinTumdee/FlashLoop">GitHub</a>
            </p>
          </>
        }
        <div className='layout-all-word'>
          {words.length > 0 ? (
            words.map((word, index) => (
              <>
                <div key={word.id} className='card-word' data-aos="fade-down">
                  <p>#{index + 1}</p>
                  <h1 style={{margin:'0'}}>{word.english}</h1>
                  <p>TH : {word.thai}</p>
                  <p>TYPE : {word.type}</p>
                  <p>Count : {word.reviewCount}</p>
                </div>
              </>
            ))
          ) : (
            <p>There are no words to memorize yet.</p>
          )}
        </div>

      </div>
    </>
  )
}

export default Home
