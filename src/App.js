import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './App.css'

const App = () => {
  const [jokes, setJokes] = useState('');

  const getJokes = async () => {
    try {
      const userJokes = await axios.get("https://official-joke-api.appspot.com/random_joke")
      
      setJokes(userJokes.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect( () => {
    getJokes()
    
    setInterval( () => {
      getJokes()
    }, 20000)
  }, []);

  return (
    <div className='jokes' key={jokes.id}>
    <h3 className='jokes__setup'>Setup: {jokes.setup}</h3>
      <p className='jokes__punchline'>Punchline: {jokes.punchline}</p>
      <div class="balls" id="red"></div>
      <div class="balls" id="white"></div>
      <div class="balls" id="green"></div>
    </div>
  );
}

export default App;