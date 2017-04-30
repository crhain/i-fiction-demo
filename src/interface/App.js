//import React, { Component } from 'react';
import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.textBuffer = ["Hi<br/>"];
    this.display;
    this.index = 1;    
    this.state = {
      display: this.textBuffer.join('')
    };
    this.addButtonHandler = this.addButtonHandler.bind(this);

  }//end of constructor
  render() {
    return (
      <div className="App">        
        <div id="display" 
              ref={(display)=>{this.display = display}}
              dangerouslySetInnerHTML={{__html: this.state.display}}>
        </div>
        <div id="menu">
              <button id="add" onClick={this.addButtonHandler}>ADD</button>
              <button></button>
              <button></button>
              <button></button>
        </div>                
      </div>
    );
  } //end of render()
  addButtonHandler(){     
    console.log('click');
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
