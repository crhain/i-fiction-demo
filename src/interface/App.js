//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Display from './display/Display.js';
import MainMenu from './main-menu/MainMenu.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.textBuffer = ["Hi<br/>"];
    this.index = 1;    
    this.state = {
      display: this.textBuffer.join('')
    };
    this.game = this.props.game;
    this.mainButtonClickHandler = this.mainButtonClickHandler.bind(this);


  }//end of constructor
  render() {
    return (
      <div className="App">              
        <Display 
            text={{__html: this.state.display}}
            getElementFromDOM={element => this.display = element}
        />
        <MainMenu clickHandler={this.mainButtonClickHandler}/>                    
      </div>
    );
  } //end of render()
  mainButtonClickHandler(){     
    console.log(this.game.name);
    this.addText("You enter a very interesting space... it's known as the react behaves crazy space." + this.index++ + "<br/>" );        
  }
  addText(text){
    let display = this.display;
    this.textBuffer.push(text);
    this.setState((prevState, props)=>({
      display: this.textBuffer.join('')
    }));
    setTimeout(()=>{
      let scrollDiff = display.scrollHeight + 4 - display.offsetHeight;    
      if(scrollDiff > 0){
          //this sets elements scrollTop value in order to scroll it down to bring overflow content into view
          display.scrollTop = scrollDiff;
      }
    }, 250);    
  }


} //end of class App

export default App;
