import React from 'react';
import './Display.css';

function Display(props){    
    return (
        <div 
            id="display" 
            dangerouslySetInnerHTML={props.text}
            ref={props.getElementFromDOM}
        >        
        </div>    
    );
}

export default Display;

