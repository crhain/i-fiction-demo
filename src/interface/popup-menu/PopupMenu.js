import React from 'react';
import HeaderNavButton from '../buttons/HeaderNavButton.js';
import Button from '../buttons/Button.js';
import './PopupMenu.css';

function PopupMenu(props){
    let menuClasses = "";
    
    if(props.isOpen){
        menuClasses += " open";
    }    
    if(props.isClosing){
        menuClasses += " closing";
    }
        
    return (        
        <div id="popup-menu" className={menuClasses}>
            <div id="popup-header">
                <h3>Title</h3>                
            </div>
            <div className="popup-menu-main">
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>
                <Button label={"Wack that rat real good!"}/>                
            </div>            
            <div id="popup-nav-bar">
                <HeaderNavButton id={"btn-nav-back"} label={"Back"} />
                <HeaderNavButton id={"btn-nav-close"} label={"Close"} clickHandler={props.closeButtonClickHandler}/>                
            </div>                                                                                                                                                                                                                                                                                               
        </div>    
    );
}

export default PopupMenu;

/* EXAMPLE
 <Button id={"nav-menu-btn-navigation"} label={"Navigation"} clickHandler={props.mainButtonClickHandler} />
 */

/*
<button className = "btn-header" id="btn-back"></button>
<button className = "btn-header" id="btn-close"></button>
*/