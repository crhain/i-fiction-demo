import React from 'react';
import ReactDOM from 'react-dom';
import PopupMenu from './PopupMenu.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PopupMenu />, div);
});