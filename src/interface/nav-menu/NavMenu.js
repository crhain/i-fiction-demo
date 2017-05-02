import React from 'react';
import './NavMenu.css';

function NavMenu(props){    
    return (        
        <div id="nav-menu">              
              <button id="navigation" onClick={props.mainButtonClickHandler}>Navigation</button>
              <button id="items">Items</button>
              <button id="characters">Characters</button>
              <button id="start" onClick={props.startButtonClickHandler}>Menu</button>
        </div>    
    );
}

export default NavMenu;