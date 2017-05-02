import React from 'react';
import './Button.css';

function NavButton(props){    
    return (        
        <button id={props.id} className="button nav-button" onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default NavButton;