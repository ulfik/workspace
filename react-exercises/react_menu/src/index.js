import React from 'react';
import ReactDOM from 'react-dom';


import TopMenu from './components/TopMenu'


import 'bootstrap/dist/css/bootstrap.css';
import menuModel from './model/menuModel';

ReactDOM.render(
  <TopMenu menuItems={menuModel}/>,
  document.getElementById("root")
);