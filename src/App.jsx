import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  
  const [count, setCount] = useState(0);
  const [intervalID, setIntervalID] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    const userCount = Number(localStorage.getItem('count'));

    if (userCount) {
      setCount(userCount)
    }
  }, [count]);

  const increment = () => {    
    localStorage.setItem('count', count + 1)
    setCount(count + 1)
  }

  const decrement = () => {
    if (count !== 0) {
      localStorage.setItem('count', count - 1)
      setCount(count - 1)
    }
  }

  const reset = () => {
    setCount(0)
    localStorage.removeItem('count') 
    clearInterval()   
  }

  const timer = () => {
    const userCount = Number(localStorage.getItem('count'));
    localStorage.setItem('count', userCount + 1)
    setCount(userCount + 1) 
  }

  const startTimer = () => {
    clearInterval(intervalID) 
    setIntervalID(setInterval(() => timer(), 1000))
    setTimerStarted(true)
  };

  const stopTimer = () => {
    clearInterval(intervalID) 
    setTimerStarted(false)
  }
 
 
  return (
    <div className='App'>
      <h1>Hello!</h1>
      <h2>{count}</h2>
      <button onClick={increment}>Плюс</button>
      <button onClick={decrement}>Минус</button>
      <button onClick={reset}>Сброс</button>

      { !timerStarted ? 
        <button onClick={startTimer}>startTimer</button> :
        <button onClick={stopTimer}>stopTimer</button> }  
     
     </div>
  )
}

export default App;