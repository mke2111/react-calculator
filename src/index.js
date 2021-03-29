import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes';
import Navbar from './Navbar';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
