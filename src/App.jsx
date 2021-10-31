import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const App = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  const customers = useSelector(state => state.customers.customers);
  console.log(count);
  console.log(customers);
   
  const increment = () => {
    dispatch ({type: 'INC_COUNT', payload: 1})
  }

  const decrement = () => {
    dispatch ({type: 'DEC_COUNT', payload: 1})
  }

  const addCustomer = (name) => {

    const customer = {
      name,
      id: Date.now(),
    }

    dispatch({type: 'ADD_CUSTOMER', payload: customer})
  }

  const removeCustomer = (customer) => {
    dispatch ({type: 'REMOVE_CUSTOMER', payload: customer.id})
  }
 
  return (
    <div className='App'>
      <h2>{count}</h2>
      <button onClick={increment}>Плюс</button>
      <button onClick={decrement}>Минус</button>

      <button onClick={() => addCustomer(prompt())}>Добавить клиента.</button>

      

      {customers.length > 0 ?
        <ul>
          {customers.map((customer, id) => 
            <li onClick={() => removeCustomer(customer)} key={customer.id} style={{fontSize: '2rem'}}>{customer.name}</li>)}
        </ul> 
        :
        <div>Клиенты отсутствуют.</div>      
      }

    </div>
  )
}

export default App;