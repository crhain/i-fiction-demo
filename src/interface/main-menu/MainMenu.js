import React from 'react';
import './MainMenu.css';

function MainMenu(props){
    console.log('MAINmENU PROPS are:');
    console.log(props.actions);        
    let buttonThree = props.actions[0] ? props.actions[0] : {action: "Default", command: "default1"};
    let buttonFour = props.actions[1] ? props.actions[1] : {action: "Default", command: "default2"};
    console.log(buttonThree.action);
    console.log(buttonFour.action);

    return (        
        <div id="menu">
              <button id="start" onClick={props.startButtonClickHandler}>Start</button>
              <button id="continue" onClick={props.mainButtonClickHandler}>Continue</button>
              <button id={ buttonThree.command }>{ buttonThree.action }</button>
              <button id={ buttonFour.command }>{ buttonFour.action }</button>
        </div>    
    );
}

export default MainMenu;