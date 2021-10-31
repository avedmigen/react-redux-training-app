import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  console.log(count);
   
  const increment = () => {
    dispatch ({type: 'INC_COUNT', payload: 1})
  }

  const decrement = () => {
    dispatch ({type: 'DEC_COUNT', payload: 1})
  }
 
  return (
    <div className='App'>
      <h2>{count}</h2>
      <button onClick={increment}>Плюс</button>
      <button onClick={decrement}>Минус</button>
    </div>
  )
}

export default App;