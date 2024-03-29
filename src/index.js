import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/stores'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
