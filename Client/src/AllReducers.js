import { combineReducers } from 'redux';
import * as App from './App/Reducer.js';
import MainPageReducer from './App/Modules/MainPage/Reducer.js';

const AllReducers = combineReducers({
  Session: App.SessionReducer,
  App: App.AppReducer,
  MainPage: MainPageReducer
})

export default AllReducers
