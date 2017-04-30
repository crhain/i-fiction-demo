import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game/Game.js';
import App from './interface/App';
import './index.css';

ReactDOM.render(
  <App game={Game}/>,
  document.getElementById('root')
);
