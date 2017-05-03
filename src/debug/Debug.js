
class Debug{
    constructor(isOn = false){
        this.on = isOn;
    }
    log(...strings){
        if(this.on){
            console.log(...strings);
        }
    }
}


export default Debug;