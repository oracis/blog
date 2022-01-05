import React from 'react';
import ReactDOM from 'react-dom';
import HomeManagement from "./container/homeManagement/";
import "normalize.css";
import "antd/dist/antd.min.css";

ReactDOM.render(
  <React.StrictMode>
    <HomeManagement />
  </React.StrictMode>,
  document.getElementById('root')
);
