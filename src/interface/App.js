//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Display from './display/Display.js';
import NavMenu from './nav-menu/NavMenu.js';
import PopupMenu from './popup-menu/PopupMenu.js';

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      display: "",
      isPopupOpen: false,
      actions: []
    };    
    this.game = this.props.game; //import game engine through props
    this.actions = [];
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);


  }//end of constructor
  render() {
    return (
      <div id="app" className="App">
        <div id="title">
          <h2>I-Fiction: A Fury's Adventure</h2>
        </div>
        <PopupMenu 
            isOpen={this.state.isPopupOpen}
            closeButtonClickHandler={this.popupMenuCloseButtonClickHandler.bind(this)} 
        />                
        <Display 
            text={{__html: this.state.display}}
            getElementFromDOM={element => this.display = element}
        />        
        <NavMenu 
          startButtonClickHandler={this.startButtonClickHandler}
          mainButtonClickHandler={this.mainButtonClickHandler}
          navMenuButtonClickHandler={this.navMenuButtonClickHandler.bind(this)}
          actions={ this.state.actions }
        />                            
      </div>
    );
  } //end of render()
  startButtonClickHandler(event){
    let results = this.game.start();
    console.log('Add these results in app.js');         
    console.log(results);
    this.addTextToDisplay(results.text + "<br/>" );
    this.addActionsToMain(results.actions);        
  }
  mainButtonClickHandler(event){
    let results = this.game.doAction({action: 'continue'});
    console.log(results);
    this.addTextToDisplay(results.text + "<br/>");
    this.addActionsToMain(results.actions);    
  }
  //This function handles nav menu button clicks
  navMenuButtonClickHandler(event){
    //1.need to call a function from this.game that gets possible actions
    // for current location and scene for each action category
    //2. for each action button determine if it is
    //  - disabled: if no actions available
    //  - directly fire action: if only one action
    //  - launch popup menu and populate it if there are more than one action
    
    //For now, just open popup menu
    if(this.state.isPopupOpen === false){
      this.setState((prevState, props)=>({
        isPopupOpen: true
      }));
    }    
  }  
  popupMenuCloseButtonClickHandler(event){
    console.log('clicked');
    if(this.state.isPopupOpen === true){
      this.setState((prevState, props)=>({
        isPopupOpen: false
      }));
    }

  }
  addTextToDisplay(text){
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

  addActionsToMain(actions){
    console.log('setting main actions to:');
    console.log(actions);
    this.setState((prevState, props) =>({ actions: actions }));    
  }


} //end of class App

export default App;
