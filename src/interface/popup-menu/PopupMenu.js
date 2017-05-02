import React from 'react';
import StartMenu from '../start-menu/StartMenu.js';
import MainMenu from '../main-menu/MainMenu.js';
import ActionMenu from '../action-menu/ActionMenu.js';
import HeaderNavButton from '../buttons/HeaderNavButton.js';
import './PopupMenu.css';

function PopupMenu(props){
    let menuClasses = "";
    let menuTitle = "Main Menu";
    let menuType = props.menuType;
    let menuItems = "ERROR!";

    if(menuType === window.POPUP_MENU_START){
        menuTitle = "Start Menu";
        menuItems = <StartMenu startButtonClickHandler={props.startButtonClickHandler} />;
    }
    else if(menuType === window.POPUP_MENU_MAIN){
        menuTitle = "Main Menu";
        menuItems = <MainMenu startButtonClickHandler={props.startButtonClickHandler} />;
    }
    else if(menuType === window.POPUP_MENU_ACTION){
        menuTitle = "Actions Menu";
        menuItems = <ActionMenu />;
    }
    
    if(props.isOpen){
        menuClasses += " open";
    }    
    if(props.isClosing){
        menuClasses += " closing";
    }
        
    return (        
        <div id="popup-menu" className={menuClasses}>
            <div id="popup-header">
                <h3>{ menuTitle }</h3>                
            </div>
            { menuItems }
            <div id="popup-nav-bar">
                <HeaderNavButton id={"btn-nav-back"} label={"Back"} clickHandler={props.backButtonClickHandler}/>
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