import React from 'react';
import './Button.css';

function Button(props){    
    return (        
        <button id={props.id} className="button">{props.label}</button>
    );
}

export default Button;