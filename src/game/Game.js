const Game = {};

var currentGame;
var currentScene;
var currentActions = [];
var textBuffer = "";
var commands = {};

//Add game engine methods to Game before exporting game
Game.start = start;
Game.doAction = doAction;
Game.getAvailableActions = getAvailableActions;

//STUB - to get avaiable actions and items from game
function getAvailableActions(){
    
}

//STUB that returns fake data
function start(){
    let currentActions = [
            {name: "Kick rat in head!", type: "navigation"},
            {name: "Flee from rat!", type: "navigation"},
            {name: "Examine candle", type: "items"}
    ];
    let text = "You find yourself in a large room with plush carpeting and fur covered walls.  Mounds and mounds of stuffed animals lay at your feet.";
    //loadData();
    return {text: text, actions: currentActions};
}

//STUB to return data on key presses
function doAction(action = {action: 'continue', command: 'continue'}){    
   let currentActions;
   let text;

   return {text: text, actions: currentActions};
}

//Loads game data and sets everything up
function loadData(data = window.data){
    if(data){
        if(!currentScene){
            currentGame = data;
            currentScene = currentGame.scenes[0];
            currentActions = currentScene.actions;
            console.log('setting current actions:');
            console.log(currentActions);
            textBuffer = currentScene.text;                
        }        
    }
    else{
        return console.error('No data File!');
    }    
}



//sets up game command objects and adds them to commands queue
function initializeCommands(){

}

function updateSceneText(text){    
    textBuffer = text;
    return textBuffer;
}
///////////////////////////////////////////////////  
//Game Classes                                   //
///////////////////////////////////////////////////

//action parts
//action: object that represents a specific action
//  { id: 1, name: "go", targets: ["north"], commands: [doSceneTransition(toScene)] }
//action: is the name used by the game for that command
//items: are the reievers of the command
//basic commands are: 
//  - sceneTransition  (go, move, option in dialogue, talk, attack)
//  - updateSceneText  
//  - removeProp  
//  - removePropToInventory (take, get)
//  - checkPlayerForItem
//  - endGame
//actions can chain commands together. a few basic ones are defined by engine
//but more can be defined by the game. 
//an action can be generic or combine the action with specific props
//custom actions can have aliases that represent the actual text displayed
// - 
//
class Action{
    constructor(action, ...commands){
        
    }
    execute(action, ...targets){
        if(targets[0]){
            this.actionTarget = targets[0];
        }
        if(targets[1]){
            this.actionTargetsTarget = targets[1];
        }
        //do command and return any results
        //return this.handler(action, actionTarget, actionTargetsTarget);
    }
}


export default Game;