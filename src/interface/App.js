//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Display from './display/Display.js';
import MainMenu from './main-menu/MainMenu.js';

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      display: "",
      actions: []
    };    
    this.game = this.props.game; //import game engine through props
    this.actions = [];
    this.startButtonClickHandler = this.startButtonClickHandler.bind(this);
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);


  }//end of constructor
  render() {
    return (
      <div className="App">              
        <Display 
            text={{__html: this.state.display}}
            getElementFromDOM={element => this.display = element}
        />
        <MainMenu 
          startButtonClickHandler={this.startButtonClickHandler}
          mainButtonClickHandler={this.mainButtonClickHandler}
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
