import React from 'react';
import './Button.css';

function NavMenuButton(props){    
    return (        
        <button id={props.id} className="button nav-menu-button" onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default NavMenuButton;