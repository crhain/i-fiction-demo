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
    //ADD dispatch object instead of using if else; should work now.

    //console.log('action button click handler:');
    //console.log(props.actionButtonClickHandler);
    if(menuType === window.POPUP_MENU_START){
        menuTitle = "Start Menu";
        menuItems = <StartMenu buttonClickHandler={props.startButtonClickHandler} />;
    } else if(menuType === window.POPUP_MENU_MAIN){
        menuTitle = "Main Menu";
        menuItems = <MainMenu buttonClickHandler={props.startButtonClickHandler} />;
    } else if(menuType === window.POPUP_MENU_NAVIGATION){
        menuTitle = "Navigation Menu";
        menuItems = <ActionMenu 
                        actions={props.availableActions} 
                        menuType={props.menuType}
                        buttonClickHandler={props.actionButtonClickHandler}/>;
    } else if(menuType === window.POPUP_MENU_ITEMS){
        menuTitle = "Items Menu";
        menuItems = <ActionMenu 
                        actions={props.availableActions} 
                        menuType={props.menuType}
                        buttonClickHandler={props.actionButtonClickHandler}/>;
    } else if(menuType === window.POPUP_MENU_CHARACTERS){
        menuTitle = "Characters Menu";
        menuItems = <ActionMenu 
                        actions={props.availableActions} 
                        menuType={props.menuType}
                        buttonClickHandler={props.actionButtonClickHandler}/>;
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
            { menuItems}
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