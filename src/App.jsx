import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import './App.css';
import { decCounterAction, incCounterAction } from './store/countReducer';
import { fetchCustomers } from './asyncAction/customers';

const App = () => {
  
  const dispatch = useDispatch();
  const count = useSelector(state => state.count.count);
  const customers = useSelector(state => state.customers.customers);
  console.log(count);
  console.log(customers);
   
  const increment = () => {
    dispatch (incCounterAction(1))
  }

  const decrement = () => {
    dispatch (decCounterAction(1))
  }

  const addCustomer = (name) => {

    const customer = {
      name,
      id: Date.now(),
    }

    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch (removeCustomerAction(customer.id))
  }
 
  return (
    <div className='App'>
      <h2>{count}</h2>
      <button onClick={increment}>Плюс</button>
      <button onClick={decrement}>Минус</button>

      <button onClick={() => addCustomer(prompt())}>Добавить клиента.</button>
      <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы.</button>

      

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