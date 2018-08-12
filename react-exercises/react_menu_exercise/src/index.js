import React from 'react';
import ReactDOM from 'react-dom';


import Container from './components/Container'


import 'bootstrap/dist/css/bootstrap.css';
import menuModel from './model/menuModel';

ReactDOM.render(
  <Container menuItems={menuModel}/>,
  document.getElementById("root")
);