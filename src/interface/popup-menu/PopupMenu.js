import React from 'react';
import HeaderNavButton from '../buttons/HeaderNavButton.js';
import Button from '../buttons/Button.js';
import './PopupMenu.css';

function PopupMenu(props){
    let menuClasses = props.isOpen ? "open" : "";    
    return (        
        <div id="popup-menu" className={menuClasses}>
            <div id="popup-header">
                <div>Title</div>
                <HeaderNavButton id={"btn-nav-back"} label={"Back"} />
                <HeaderNavButton id={"btn-nav-close"} label={"Close"} clickHandler={props.closeButtonClickHandler}/>                
            </div>
            <Button/>
            <Button/>                                                
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>                                                                                                                                                                                                                                                                                               
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