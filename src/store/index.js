import {createStore, combineReducers} from "redux";
import {countReducer} from './countReducer';
import {customerReducer} from './customerReducer';

const rootReducer = combineReducers ({
    count: countReducer,
    customers: customerReducer,
  }
)


const store = createStore(rootReducer);

export default store;