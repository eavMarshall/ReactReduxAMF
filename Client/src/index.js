import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import AllReducers from './AllReducers';
import './index.css';

let store = createStore(AllReducers)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
