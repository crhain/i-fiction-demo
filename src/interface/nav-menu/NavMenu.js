import React from 'react';
import NavMenuButton from '../buttons/NavMenuButton.js';
import './NavMenu.css';

function NavMenu(props){    
    console.log('passed active nav menu buttons object:');
    console.log(props.activeNavMenuButtons);
    let navigationButtonIsInactive = !props.activeNavMenuButtons.navigation;
    let itemsButtonIsInactive = !props.activeNavMenuButtons.items;
    let charactersButtonIsInactive = !props.activeNavMenuButtons.characters;

    return (         

        <div id="nav-menu">
            <NavMenuButton 
                            id={"nav-menu-btn-navigation"} 
                            isInactive={navigationButtonIsInactive} 
                            label={"Navigation"} 
                            clickHandler={props.clickHandler} />
            <NavMenuButton 
                            id={"nav-menu-btn-items"} 
                            isInactive={itemsButtonIsInactive}
                            label={"Items"} 
                            clickHandler={props.clickHandler} />
            <NavMenuButton 
                            id={"nav-menu-btn-characters"} 
                            isInactive={charactersButtonIsInactive} 
                            label={"Characters"} 
                            clickHandler={props.clickHandler} />
            <NavMenuButton 
                            id={"nav-menu-btn-main"} 
                            isInactive={false} 
                            label={"Main"} 
                            clickHandler={props.clickHandler} />              
        </div>    
    );
}

export default NavMenu;
