import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import QR from '../assets/Click_it.jpg';

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <h1 data-aos="fade-down" style={{ textAlign: 'center' }}>Welcome to Flash Loop!</h1>
      <div style={{ textAlign: 'center' }}>
        <h1>Donate Me🍵</h1>
        <img width={200} src={QR} alt="QR" />
      </div>
      <p data-aos="fade-up" style={{ textAlign: 'center' , margin: '0 20%'}}>
        We're no strangers to love You know the rules and so do I (Do I) A full commitment's what I'm thinking of You wouldn't get this from any other guy
        I just wanna tell you how I'm feeling Gotta make you understand
        Never gonna give you up<br />
        Never gonna let you down<br />
        Never gonna run around and desert you<br />
        Never gonna make you cry<br />
        Never gonna say goodbye<br />
        Never gonna tell a lie and hurt you<br />
        <br /><a href="https://github.com/NobpasinTumdee/FlashLoop">GitHub</a>
      </p>
    </>
  )
}

export default Home
