//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Display from './display/Display.js';
import NavMenu from './nav-menu/NavMenu.js';
import PopupMenu from './popup-menu/PopupMenu.js';

class App extends React.Component {
  constructor(props){
    super(props);
    //Set up some constants
    const POPUP_MENU_START = "start";
    const POPUP_MENU_MAIN = "main";
    const POPUP_MENU_ACTION = "action";    
    //attach them to the window object to make them global
    window.POPUP_MENU_START = POPUP_MENU_START;
    window.POPUP_MENU_MAIN = POPUP_MENU_MAIN;
    window.POPUP_MENU_ACTION = POPUP_MENU_ACTION;
    //set state 
    this.state = {
      display: "",
      isPopupOpen: false,
      popupMenuType: POPUP_MENU_START,
      activeNavMenuButtons: {navigation: 0, items: 0, characters: 0, main: 1},
      availableActions: []
    };    
    //set some class variables
    this.game = this.props.game; //import game engine through props
    this.isPopupClosing = false; //used for playing closing animations on popup menu
    this.availableActions = [];
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);        
  }//end of constructor
  render() {
    //console.log('rendering active nave menu buttons:');
    //console.log(this.state.activeNavMenuButtons);
    return (
      <div id="app" className="App">
        <div id="title">
          <h2>I-Fiction: A Fury's Adventure</h2>
        </div>
        <PopupMenu 
            isOpen={this.state.isPopupOpen}
            isClosing={this.isPopupClosing}
            menuType={this.state.popupMenuType}
            availableActions={this.state.availableActions}
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
  //STUB:
  //STUB function for setting state of nav and action popupmenu buttons
  setNavButtonState(currentActions){
    //{navigation: 0, items: 0, characters: 0}
    let navButtonCountByType = {navigation: 0, items: 0, characters: 0, main: 1}
    //console.log('my available game actions are:');
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
  //STUB: may need rewrite
  updateAvailableActions(actions){
    //console.log('setting main actions to:');
    //console.log(actions);
    this.setState((prevState, props) =>({ availableActions: actions }));    
  }
  //////////////////////////////////////////////////////////////////////////////////
  //NavMenu event handlers and utility methods
  ///////////////////////////////////////////////////////////////////////////////////

  mainButtonClickHandler(event){
    let results = this.game.doAction({action: 'continue'});
    //console.log(results);
    this.addTextToDisplay(results.text + "<br/>");
    this.addActionsToMain(results.actions);    
  }
  navMenuButtonClickHandler(button, event){
    let targetId = event.target.id;
    let isActive = !event.target.classList.contains('is-inactive');
    let menuType = window.POPUP_MENU_MAIN;
    console.log('Nav button:');
    console.log(button);

    //console.log("popup menu info:");
    //console.log(event.target.classList.contains('button'));
    //1.need to call a function from this.game that gets possible actions
    // for current location and scene for each action category
    //2. for each action button determine if it is
    //  - disabled: if no actions available
    //  - directly fire action: if only one action
    //  - launch popup menu and populate it if there are more than one action
    event.preventDefault();
    if(isActive){
      //console.log('click');
      //Determine what to populate popupmenu with
      if(targetId === 'nav-menu-btn-characters'){
        menuType = window.POPUP_MENU_ACTION;
      } else if(targetId === 'nav-menu-btn-items'){
        menuType = window.POPUP_MENU_ACTION;
      } else if(targetId === 'nav-menu-btn-navigation'){
        menuType = window.POPUP_MENU_ACTION;
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
  startButtonClickHandler(event){
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
