import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/Container';

import buttonExerciseModel from './model/buttonExerciseModel';

ReactDOM.render(
  <Container elements={buttonExerciseModel} />,
  document.getElementById('root')
);