import { useEffect, useState } from 'react';
import './App.css'
import Header from './header'

function App() {
  const arr = [248, 149, 133, 448, 197, 1, 59, 94, 6, 9, 445, 258];
  const [randomPokemon, setRandomPokemon] = useState(arr);
  const [apiArray, setApiArray] = useState([]);
  const [score, setScore] = useState([]);
  let [highScore, setHighScore] = useState(0);
  const arr3 = [];
  const arr4 = score;


  async function pokeMan(num) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`, { mode: 'cors' });
    const json = await data.json();
    // console.log(json);
    return (json);
  }

  useEffect(() => {

    for (let i = 0; i < randomPokemon.length; i++) {
      // console.log(pokeMan(arr[i]))
      arr3.push(pokeMan(randomPokemon[i]));
    }

    Promise.all(arr3).then(val => {
      setApiArray(val);
    })
  }, [randomPokemon])


  return (
    <>
      <Header scoreLength={score.length}
        highScoreq={highScore} />
      <div className='cards'>
        {apiArray.map((ar, i) => {
          return (
            <div className='card' key={i}
              onClick={(e) => {
                arr.sort(() => 0.5 - Math.random())
                console.log(e.target.id);

                if (arr4.includes(e.target.id)) {
                  setScore([]);
                  if (arr4.length > highScore) {
                    console.log('ttt')
                    setHighScore(arr4.length)
                  }
                } else {
                  arr4.push(e.target.id);
                  setScore(arr4);
                }
              
                console.log(arr4.length);
                setRandomPokemon(arr);
              }}
            >
              <img
                className='cardImg'
                id={ar.id}
                src={ar.sprites.other.dream_world.front_default}
              />
              <h3>{ar.name}</h3>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App;
