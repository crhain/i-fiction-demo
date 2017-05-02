import React from 'react';
import Button from '../buttons/Button.js';

function ActionMenu(props){    
    return (        
          <div className="popup-menu-main">
            <Button id={"temp1"} label={"Kick rat in the head!"}/>
            <Button id={"temp2"} label={"Kick rat in the head!"}/>
            <Button id={"temp3"} label={"Kick rat in the head!"}/>
            <Button id={"temp4"} label={"Kick rat in the head!"}/>            
        </div>     
    );
}

export default ActionMenu;