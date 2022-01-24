import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store  from "./store/";
import "normalize.css";
import "antd/dist/antd.min.css";
import "./style.scss";
import Placement from "./container/Placement";



ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Placement />
        </HashRouter>
    </Provider>,
  document.getElementById('root')
);
