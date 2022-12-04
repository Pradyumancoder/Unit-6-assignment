const {EventEmitter} = require("events")

const Button = new EventEmitter()

Button.on("click",()=>{
    console.log("button clicked");
})

// Button.emit("click"); 

// single time click or emit



const player = new  EventEmitter()
Button.on("shoot",()=>{
    console.log("player shoot successfull")
})

// Button.emit("shoot")
// Button.emit("shoot")

// double time click or emit


// use another function on websocket
// using timer functionality in to it

// setTimeout(()=>{
//     Button.emit("shoot")
// },5000)

module.exports = Button