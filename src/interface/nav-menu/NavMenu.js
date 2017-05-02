import React from 'react';
import NavMenuButton from '../buttons/NavMenuButton.js';
import './NavMenu.css';

function NavMenu(props){    
    return (        
        <div id="nav-menu">
            <NavMenuButton id={"nav-menu-btn-navigation"} label={"Navigation"} clickHandler={props.clickHandler} />
            <NavMenuButton id={"nav-menu-btn-items"} label={"Items"} clickHandler={props.clickHandler} />
            <NavMenuButton id={"nav-menu-btn-characters"} label={"Characters"} clickHandler={props.clickHandler} />
            <NavMenuButton id={"nav-menu-btn-main"} label={"Main"} clickHandler={props.clickHandler} />              
        </div>    
    );
}

export default NavMenu;
