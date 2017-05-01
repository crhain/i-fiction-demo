const Game = {};

var currentGame;
var currentScene;
var currentActions = [];
var textBuffer = "";

//Add game engine methods to Game before exporting game
Game.start = start;
Game.doAction = doAction;

//Starts game with currently loaded ata
function start(){
    loadData();
    return {text: currentScene.text, actions: currentActions};
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

//excutes an action recieved from interface
function doAction(action = {action: 'continue', command: 'continue'}){    
    if(action.action === 'continue'){
        currentScene = currentGame.scenes[1];
    }
    let displayBuffer = updateSceneText(currentScene.text);
    currentActions = currentScene.actions;    
    return {text: displayBuffer, actions: currentActions};    
}

function updateSceneText(text){    
    textBuffer = text;
    return textBuffer;
}


export default Game;