import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './MainMenu.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainMenu />, div);
});