import { combineReducers } from 'redux';
import AppReducer from './App/Reducer.js';

const AllReducers = combineReducers({
  App: AppReducer
})

export default AllReducers
