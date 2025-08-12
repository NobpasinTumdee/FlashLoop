import { useEffect, useState } from 'react';
import levelI from '../assets/Achievement/level I.png';
import levelII from '../assets/Achievement/level II.png';
import levelIII from '../assets/Achievement/level III.png';
import levelIV from '../assets/Achievement/level IV.png';
import levelV from '../assets/Achievement/level V.png';
import levelVI from '../assets/Achievement/level VI.png';
import './page.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { getAllAchievements, type AchievementTYPE, getAllWordsFromDB } from '../db';
// import { UnlockAchievement, resetAchievement } from '../db';
import type { Word } from '../types';

const Achievement = () => {
  const [achievements, setAchievements] = useState<AchievementTYPE[]>([]);
  const [words, setWords] = useState<Word[]>([]);
  useEffect(() => {
    getAllAchievements().then(setAchievements);
    getAllWordsFromDB().then(setWords);
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  // const getAchievement = async (id: number) => {
  //   if (id >= 0) {
  //     await UnlockAchievement(Number(achievements[id].id));
  //     const updated = await getAllAchievements();
  //     setAchievements(updated);
  //     console.log(`Achievement ${achievements[id].name} unlocked!`);
  //   }
  // };

  // const DeleteAchievement = async (id: number) => {
  //   if (id >= 0) {
  //     await resetAchievement(Number(achievements[id].id));
  //     const updated = await getAllAchievements();
  //     setAchievements(updated);
  //   }
  // };

  // โค้ดสำหรับคำนวณ Progress
  const progressbar = (maxWords: number) => {
    if (words == null || words.length === 0) {
      return 0;
    }
    let progressPercentage = ((words.length / maxWords) * 100).toFixed(1);
    if (Number(progressPercentage) > 100) {
      progressPercentage = '100';
    }
    return progressPercentage;
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '20px' }} data-aos="fade-down">
        <h1>Achievement</h1>
        <p>Here you can track your achievements!</p>
        <p>Current words learned: {words.length}</p>
      </div>
      <div className='achievement-container' data-aos="fade-down">
        {achievements.map((achievement, index) => (
          <div className={`achievement-title ${achievement.isUnlocked ? 'unlocked' : ''}`} key={index} >
            <img src={index === 0 ? levelI : index === 1 ? levelII : index === 2 ? levelIII : index === 3 ? levelIV : index === 4 ? levelV : levelVI} alt={`level${index + 1}`} />
            <div style={{width:'100%'}}>
              <p>
                <b>{achievement.name}</b><br />
                {achievement.description}<br />
              </p>
              {achievement.isUnlocked ? (
                <p style={{ color: 'green', margin: '0' }}>Unlocked</p>
              ) : (
                <>
                  <div style={{ width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='progress-bar'>
                      <div className='progress-bar-inner' style={{ width: `${progressbar(achievement.progress)}%`, }} />
                    </div>
                    <p className='progress-bar-text'>{progressbar(achievement.progress)}%</p>
                  </div>
                  {/* <p style={{ color: 'red', margin:'0' }}>Locked</p> */}
                </>
              )}
            </div>


            {/* <div>
              <button onClick={() => getAchievement(index)} disabled={achievement.isUnlocked}>
                {achievement.isUnlocked ? 'Unlocked' : 'Unlock'}
              </button>
              <button onClick={() => DeleteAchievement(index)} style={{ backgroundColor: 'red', color: 'white' }}>
                Delete
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Achievement
