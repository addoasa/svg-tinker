import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/App';
import { Provider } from 'react-redux';
import store from '../store';
    // wrap the App in the Provider and pass in the store

ReactDom.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);