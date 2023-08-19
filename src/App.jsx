import './App.css'
import Pikachu from './Pokemon/Pikachu.jsx'
import Charmander from './Pokemon/Charmander'
import Squirtle from './Pokemon/Squirtel'
import Bulbasaur from './Pokemon/Bulbasaur'
import Caterpie from './Pokemon/Caterpie'
import Cuebone from './Pokemon/Cuebone'
import Ditto from './Pokemon/Ditto'
import Gengar from './Pokemon/Gengar'
import Jigglypuff from './Pokemon/Jigglypuff'
import Meowth from './Pokemon/Meowth'
import Mew from './Pokemon/Mew'
import Geodude from './Pokemon/Geodude'
import Psyduck from './Pokemon/Psyduck'
import Togepi from './Pokemon/Togepi'
import Eevee from './Pokemon/Eevee'
import Ekans from './Pokemon/Ekans'
import {  useState } from 'react'



function App() {
  const [arr,setarr] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [score,setscore] = useState(1);
  const [highscore,sethighscore] = useState(0);
  
  function handle(id){
    const newarr = arr;
    newarr[id-1]++;
    if(newarr[id-1]===2){
      alert("Game Over");
      let scores = document.getElementById('score');
      scores.innerHTML = "Score: 0";
      let p=1;
      setscore(p);
      if(score>highscore){
        sethighscore(score-1);
        let highscores = document.getElementById('highscore');
        highscores.innerHTML = "High Score: "+(score-1);
      }
      for(let i=0;i<16;i++){
        newarr[i]=0;
      }
    }
    else{
    setarr(newarr);
    setscore(score+1);
    }
    if(score>=16){
      alert("You Win");
      let p=1;
      setscore(p);
    }
    let scores = document.getElementById('score');
    let highscores = document.getElementById('highscore');
    scores.innerHTML = "Score: "+score;
    highscores.innerHTML = "High Score: "+highscore;
  }
  return (
    <div className="pokemonGrid">
      <div id='1' onClick={()=>{handle(1)}}>
        <Pikachu/>
      </div>
      <div id='2' onClick={()=>{handle(2)}}>
        <Charmander/>
      </div>
      <div id='3' onClick={()=>{handle(3)}}>
      <Squirtle/>
      </div>
      <div id='4' onClick={()=>{handle(4)}}>
      <Bulbasaur/>
      </div>
      <div id='5' onClick={()=>{handle(5)}}>
      <Caterpie/>
      </div>
      <div id='6' onClick={()=>{handle(6)}}>
      <Cuebone/>
      </div>
      <div id='7' onClick={()=>{handle(7)}}>
      <Ditto/>
      </div>
      <div id='8' onClick={()=>{handle(8)}}>
      <Gengar/>
      </div>
      <div id='9' onClick={()=>{handle(9)}}>
      <Jigglypuff/>
      </div>
      <div id='10' onClick={()=>{handle(10)}}>
      <Meowth/>
      </div>
      <div id='11' onClick={()=>{handle(11)}}>
      <Mew/>
      </div>
      <div id='12' onClick={()=>{handle(12)}}>
      <Geodude/>
      </div>
      <div id='13' onClick={()=>{handle(13)}}>
      <Psyduck/>
      </div>
      <div id='14' onClick={()=>{handle(14)}}>
      <Togepi/>
      </div>
      <div id='15' onClick={()=>{handle(15)}}>
      <Eevee/>
      </div>
      <div id='16' onClick={()=>{handle(16)}}>
      <Ekans/>
      </div>
    </div>
  )
}

export default App
