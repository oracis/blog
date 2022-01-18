import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import HomeManagement from "./container/homeManagement/";
import store  from "./store";
import "normalize.css";
import "antd/dist/antd.min.css";
import "./style.scss";

ReactDOM.render(
    <Provider store={store}>
        <HomeManagement />
    </Provider>,
  document.getElementById('root')
);
