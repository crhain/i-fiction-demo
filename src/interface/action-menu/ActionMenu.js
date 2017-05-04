import React from 'react';
import Button from '../buttons/Button.js';

function ActionMenu(props){    
    let buttons = [];
    let actions = props.actions;    
    
    for(let i = 0; i < actions.length; i++){
        if(actions[i].type === props.menuType){
            buttons.push(<Button key={i} label={actions[i].name} buttonClickHandler={props.buttonClickHandler}/>);
        }        
    }    
    return (        
          <div className="popup-menu-main">
            {buttons}
        </div>     
    );
}

export default ActionMenu;