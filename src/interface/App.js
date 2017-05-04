'use strict'
//import React, { Component } from 'react';
import Debug from '../debug/Debug.js';
import React from 'react';
import './App.css';
import Display from './display/Display.js';
import NavMenu from './nav-menu/NavMenu.js';
import PopupMenu from './popup-menu/PopupMenu.js';

//set up custom debuger. 
const debug = new Debug();
debug.on = true; //set to true to turn on debugging

class App extends React.Component {
  constructor(props){
    super(props);
    //Set up some constants
    const POPUP_MENU_START = "start";
    const POPUP_MENU_MAIN = "main";
    const POPUP_MENU_ACTION = "action";
    const POPUP_MENU_NAVIGATION = "navigation";
    const POPUP_MENU_ITEMS = "items";
    const POPUP_MENU_CHARACTERS = "characters";    
    //attach them to the window object to make them global
    window.POPUP_MENU_START = POPUP_MENU_START;
    window.POPUP_MENU_MAIN = POPUP_MENU_MAIN;
    window.POPUP_MENU_ACTION = POPUP_MENU_ACTION;
    window.POPUP_MENU_NAVIGATION = POPUP_MENU_NAVIGATION;
    window.POPUP_MENU_ITEMS = POPUP_MENU_ITEMS;
    window.POPUP_MENU_CHARACTERS = POPUP_MENU_CHARACTERS;    
    //set state 
    this.state = {
      display: "",
      gameTitle: "A Fury's Adventure",
      isPopupOpen: false,
      popupMenuType: POPUP_MENU_START,
      activeNavMenuButtons: {navigation: 0, items: 0, characters: 0, main: 1},
      availableActions: []
    };    
    //set some class variables
    this.game = this.props.game; //import game engine through props
    this.isPopupClosing = false; //used for playing closing animations on popup menu
    this.availableActions = [];    
  }//end of constructor
  render() {
    //console.log('rendering active nave menu buttons:');
    //console.log(this.state.activeNavMenuButtons);
    return (
      <div id="app" className="App">
        <div id="title">
          <h2>I-Fiction: {this.state.gameTitle}</h2>
        </div>
        <PopupMenu 
            isOpen={this.state.isPopupOpen}
            isClosing={this.isPopupClosing}
            menuType={this.state.popupMenuType}
            availableActions={this.state.availableActions}
            actionButtonClickHandler={this.actionButtonClickHandler.bind(this)}
            closeButtonClickHandler={this.popupMenuCloseButtonClickHandler.bind(this)} 
            backButtonClickHandler={this.popupMenuBackButtonClickHandler.bind(this)}
            startButtonClickHandler={this.startButtonClickHandler.bind(this)}
        />                
        <Display 
            text={{__html: this.state.display}}
            getElementFromDOM={element => this.display = element}
        />        
        <NavMenu           
          clickHandler={this.navMenuButtonClickHandler.bind(this)}
          actionsByType={this.state.actionsByType}
          activeNavMenuButtons={this.state.activeNavMenuButtons}          
        />                            
      </div>
    );
  } //end of render()

  //STUB for updating the game interface
  updateInterfaceWithGameOutput(gameOutput){
    this.updateAvailableActions(gameOutput.actions);    
    this.setNavButtonState(gameOutput.actions);
    this.updateDisplay(gameOutput.text + "<br/>" );
    
    //this.addActionsToMain(results.actions);        
  }
  //STUB: may need rewrite
  updateAvailableActions(actions){
    debug.log('updateAvaiableActions(actions)', 'actions:', actions);
    this.setState((prevState, props) =>({ availableActions: actions }));    
  }
  
  //STUB function for setting state of nav and action popupmenu buttons
  setNavButtonState(currentActions){
    //{navigation: 0, items: 0, characters: 0}
    let navButtonCountByType = {navigation: 0, items: 0, characters: 0, main: 1}
    debug.log('navButtonCountByType:', navButtonCountByType);
    //console.log(actions);
    for(let i = 0; i < currentActions.length; i++){
      let action = currentActions[i];
      navButtonCountByType[action.type]++;      
    }
    //console.log('setting nav button state with:');
    //console.log(navButtonCountByType);
    this.setState((prevState, props)=>({
        activeNavMenuButtons: navButtonCountByType
      }));    
  }
  //STUB for updating display text
  updateDisplay(text){
    let display = this.display;
    this.setState((prevState, props)=>({
      display: text
    }));
    setTimeout(()=>{
      let scrollDiff = display.scrollHeight + 4 - display.offsetHeight;    
      if(scrollDiff > 0){
          //this sets elements scrollTop value in order to scroll it down to bring overflow content into view
          display.scrollTop = scrollDiff;
      }
    }, 250);    
  }
  
  //////////////////////////////////////////////////////////////////////////////////
  //NavMenu event handlers and utility methods
  ///////////////////////////////////////////////////////////////////////////////////
  navMenuButtonClickHandler(button, event){
    //Use button.actionType to figure out which nav button is being clicked
    // Then set the MenuType of the popup and get the currentActions
    // to populate the window. Should pass a 'buttonsItem' list to popupwindow
    // this an array that contains items/actions names to populate buttons with
    //  each button will recieve a props.item or props.action to track this.
    // will need to keep track of which popup button is being clicked also
    // so maybe we create 3 different state values to hold actions for that
    // nav type along with some information that can be sent back to game
    // engine in form of a gameInput object
    let targetId = event.target.id;
    let isActive = !event.target.classList.contains('is-inactive');
    let menuType = window.POPUP_MENU_MAIN;    
    event.preventDefault();
    if(isActive){
      debug.log('navMenuButtonClickHandler(button, event)', 'button:', button);
      debug.log('event:', event);      
      //Determine what to populate popupmenu with
      if(button.actionType === window.POPUP_MENU_NAVIGATION){
        menuType = window.POPUP_MENU_NAVIGATION;
      }
      else if(button.actionType === window.POPUP_MENU_ITEMS){
        menuType = window.POPUP_MENU_ITEMS;
      } 
      else if(button.actionType === window.POPUP_MENU_CHARACTERS){
        menuType = window.POPUP_MENU_CHARACTERS;
      } 
      //Open popup menu
      this.isPopupClosing = false;
      
      if(!this.state.isPopupOpen){
        this.setState((prevState, props)=>({
          isPopupOpen: true,
          popupMenuType: menuType
        }));
      }
    }
               
  }  
  //////////////////////////////////////////////////////////////////////////////////
  //PopupMenu event handlers and utility methods
  ///////////////////////////////////////////////////////////////////////////////////
  actionButtonClickHandler(button, event){
    //get button.items or button.actions or button.characters
    // and if one of these is set, add to gameInput object
    // if this button.final is true, then call a handler function that
    // takes gameInput, sends it to this.game.somemethod and then
    //  recives a gameOutput object and calls appropriate methods to process it

    //Close popup menu if button is single action
    //Else populate popup menu with new buttons
    //Also populate more if 'more' button clicked
    debug.log('clicked: ' + button.label);    
  }
  popupMenuBackButtonClickHandler(event){
    //find out how deep into menu we are
    // and if we are on first level, then just close it.
    // just close it for now
    this.closePopupMenu();
  }
  popupMenuCloseButtonClickHandler(event){        
    this.closePopupMenu();
  }
  closePopupMenu(){
    this.isPopupClosing = true;

    if(this.state.isPopupOpen === true){
      this.setState((prevState, props)=>({
        isPopupOpen: false
      }));
    }
  }
  //////////////////////////////////////////////////////////////////////////////////
  //PopupMenu -> StartMenu event handlers and methods
  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////
  //PopupMenu -> MainMenu event handlers and methods
  ///////////////////////////////////////////////////////////////////////////////////
  startButtonClickHandler(button, event){
    debug.log('start clicked.');
    let gameOutput = this.game.start();
    this.updateInterfaceWithGameOutput(gameOutput);    
  }
  //////////////////////////////////////////////////////////////////////////////////
  //PopupMenu -> ActionMenu event handlers and methods
  ///////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////////
  //Display event handlers and utility methods
  ///////////////////////////////////////////////////////////////////////////////////
  
} //end of class App

export default App;
