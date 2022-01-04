import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import Home from "./container/home/";
import "./style.scss"

ReactDOM.render(
  <React.StrictMode>
      <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
