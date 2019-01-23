import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//引入rem.js
import "./modules/rem.js"
//引入路由
import {HashRouter} from "react-router-dom"
//引入main.css
import "./stylesheets/main.scss"
//引入swiper.scss
import "swiper/dist/css/swiper.min.css"
//引入store
import {Provider} from "react-redux"
//引入ant-design css
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
        <HashRouter><App /></HashRouter>
    </Provider>       
    , document.getElementById('root')
);

