import React from 'react';
import './Button.css';

function NavMenuButton(props){
    let inactiveClass = props.isInactive ? " is-inactive" : "";
        
    return (        
        <button id={props.id} className={"button nav-menu-button" + inactiveClass} onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default NavMenuButton;