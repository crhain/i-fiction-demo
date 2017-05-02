import React from 'react';
import Button from '../buttons/Button.js';
import './StartMenu.css';

function StartMenu(props){    
    return (        
        <div className="popup-menu-main">
            <Button id={"start-menu-1"} label={"Continue"}/>
            <Button id={"start-menu-2"} label={"Start New Game"}/>
            <Button id={"start-menu-3"} label={"About"}/>
        </div>   
    );
}

export default StartMenu;