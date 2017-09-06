import { combineReducers } from 'redux';
import AppReducer from './App/Reducer.js';
import MainPageReducer from './App/Modules/MainPage/Reducer.js';

const AllReducers = combineReducers({
  App: AppReducer,
  MainPage: MainPageReducer
})

export default AllReducers
