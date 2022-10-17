import React from 'react'
import ReactDOM from 'react-dom/client'
//import reportWebVitals from './reportWebVitals';

import { HashRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './css/Main.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <HomePage />
    </HashRouter>
  </React.StrictMode>
);

//reportWebVitals();
