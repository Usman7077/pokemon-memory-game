import { useEffect, useState } from 'react';
import './App.css'
import Header from './header'
import Card from './Cards';
import { POKEMON_URLS } from './constants';

function App() {
  const [apiArray, setApiArray] = useState([]);
  const [score, setScore] = useState([]);
  const [highScore, setHighScore] = useState(0);

  async function pokeMan(url) {
    const data = await fetch(url, { mode: 'cors' });
    const json = await data.json();
    return (json);
  }

  function shuffleArray(e) {
    {
      if (score.includes(e.target.id)) {
        setScore([]);
        if (score.length > highScore) {
          setHighScore(score.length)
        }
      } else {
        setScore([...score, e.target.id]);
      }

      apiArray.sort(() => 0.5 - Math.random());
    }
  }

  useEffect(() => {
    const json = POKEMON_URLS.map(el => pokeMan(el));
    Promise.all(json).then(res => setApiArray(res));
  }, []);

  return (
    <>
      <Header
        scoreLength={score.length}
        highScore={highScore}
      />

      <div className='cards'>
        {apiArray.map((el) => {
          return (
            <Card
              key={el.id}
              shuffleArray={shuffleArray}
              el={el}
            />)
        })}
      </div>
    </>
  )
}

export default App;
