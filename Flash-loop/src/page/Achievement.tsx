import { useEffect } from 'react';
import levelI from '../assets/Achievement/level I.png';
import levelII from '../assets/Achievement/level II.png';
import levelIII from '../assets/Achievement/level III.png';
import levelIV from '../assets/Achievement/level IV.png';
import levelV from '../assets/Achievement/level V.png';
import levelVI from '../assets/Achievement/level VI.png';
import './page.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Achievement = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }} data-aos="fade-down">
        <h1>Achievement</h1>
        <p>Here you can track your achievements!</p>
        <p>รอแปป กำลังทำ 😎</p>
      </div>
      <div className='achievement-container'>
        <div className='achievement-title' data-aos="fade-down">
          <img src={levelI} alt="levelI" />
          <p>
            <b>Level I</b><br />
            Word Rookie
          </p>
        </div>
        <div className='achievement-title' data-aos="fade-down">
          <img src={levelII} alt="levelII" />
          <p>
            <b>Level II</b><br />
            Word Hunter
          </p>
        </div>
        <div className='achievement-title' data-aos="fade-down">
          <img src={levelIII} alt="levelIII" />
          <p>
            <b>Level III</b><br />
            Vocab Pro
          </p>
        </div>
        <div className='achievement-title' data-aos="fade-down">
          <img src={levelIV} alt="levelIV" />
          <p>
            <b>Level IV</b><br />
            Word Master
          </p>
        </div>
        <div className='achievement-title'data-aos="fade-down">
          <img src={levelV} alt="levelV" />
          <p>
            <b>Level V</b><br />
            Lexicon Legend
          </p>
        </div>
        <div className='achievement-title'data-aos="fade-down">
          <img src={levelVI} alt="levelVI" />
          <p>
            <b>Level VI</b><br />
            Vocab Conqueror
          </p>
        </div>
      </div>
    </>
  )
}

export default Achievement
