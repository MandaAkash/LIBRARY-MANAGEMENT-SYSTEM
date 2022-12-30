import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route,Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {store} from "./store"
import {Provider} from 'react-redux'
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './component.js/reducer';
ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <StateProvider initialState={initialState} reducer={reducer}>
         <App />
      </StateProvider>
      </Provider>
      </BrowserRouter>
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
