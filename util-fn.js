module.exports = {
    longRunningFn : (millis)=>{
        let now = Date.now()
        while(Date.now()-now < millis){}
    }
}