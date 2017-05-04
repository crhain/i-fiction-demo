import React from 'react';
import './Button.css';

function Button(props){    

    //hack because this button is getting called without a click handler in some cases
    //and was causing errors with the bind function.
    let clickHandler = props.buttonClickHandler || (() => null);

    return (        
        <button id={props.id} onClick={clickHandler.bind(null, props)}>
            {props.label}
        </button>
    );
}

export default Button;

 