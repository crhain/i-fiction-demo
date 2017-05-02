import React from 'react';
import './Button.css';

function HeaderNavButton(props){    
    return (        
        <button id={props.id} className="button header-nav-button" onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default HeaderNavButton;