import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [jokes, setJokes] = useState('');
  const [seconds, setSeconds] = React.useState(20);

  const getJokes = async () => {
    try {
      const userJokes = await axios.get("https://official-joke-api.appspot.com/random_joke")
      
      setJokes(userJokes.data);
      setSeconds(20);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect( () => {
    getJokes();
  },[]);
  
  useEffect(()=>{
    if(seconds > 0){
      setTimeout(()=>setSeconds(seconds - 1),1000);
    }
  },[seconds]);
  
  useEffect(()=>{
    if(seconds === 0){
      getJokes()
    }
  },[seconds])
    

  return (
    <div className='jokes' key={jokes.id}>
      <h1>Counter:{seconds}</h1>
    <h3 className='jokes__setup'>Setup: {jokes.setup}</h3>
      <p className='jokes__punchline'>Punchline: {jokes.punchline}</p>
    </div>
  );
}

export default App;