import React from 'react';
import './Button.css';

function Button(props){    
    return (        
        <button id={props.id} onClick={props.clickHandler}>
            {props.label}
        </button>
    );
}

export default Button;