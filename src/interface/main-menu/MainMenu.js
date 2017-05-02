import React from 'react';
import Button from '../buttons/Button.js';
import './MainMenu.css';

function MainMenu(props){    
    return (        
        <div className="popup-menu-main">
            <Button id={"main-menu-start"} label={"Start"} clickHandler={props.startButtonClickHandler} />
            <Button id={"main-menu-inventory"} label={"Inventory"}/>
            <Button id={"main-menu-map"} label={"Map"}/>
            <Button id={"main-menu-save"} label={"Save"}/>            
        </div>   
    );
}

export default MainMenu;