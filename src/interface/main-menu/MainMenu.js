import React from 'react';
import './MainMenu.css';

function MainMenu(props){
    return (
        <div id="menu">
              <button id="add" onClick={props.clickHandler}>ADD</button>
              <button></button>
              <button></button>
              <button></button>
        </div>    
    );
}

export default MainMenu;