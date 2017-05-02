import React from 'react';
import ReactDOM from 'react-dom';
import ActionMenu from './ActionMenu.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionMenu />, div);
});