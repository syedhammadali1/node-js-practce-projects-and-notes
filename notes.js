const { type } = require("os")

What is node js?



tutorial 11

// module scoping means every module has its own scope and with same name of variables does not conflict with each other

// every module in node js wraped in an iife  before being loaded

// iife helps keep top level variables scoped rather then global object

// iffe
 (function(){
    const superHero = 'superman';
    console.log(superHero);
 })()

 (function(){
    const superHero = 'batman';
    console.log(superHero);
 })()

//  every iife/module/file contains 5 parameters 

//  module caching 


// there are five defferent patterns in import and export in node js


// export and module.export has some defferences 

// export is a reference of module.export

// and reference will broke if you assign an object to export


// ES Modules Summary
// ES Modules is the ECMAScript standard for modules
// It was introduced with ES2015
// Node.js 14 and above support ES Modules
// Instead of module.exports, we use the export keyword
// The export can be default or named
// We import the exported variables or functions using the import keyword
// If it is a default export, we can assign any name while importing
// If it is a named export, the import name must be the same

// importing json data and watch mode

// node --watch filename

// there are 3 types f module in node js

// 1) local
// 2) build in
// 3) third party module

// local module has 2 types

// 1) common js module
// 2) es module

// build in module has multiple types

// 1)path   
// 2)FileSystem
// 3)http


// callback pattern

// 1)function can be passed as an argument in another function.
// 2)function can return a function
// 3)any function which is passed  as an argument in another function is called callback function
// 4)a fucntion who accepts a function as an argument or return a function is called higher order function 

// callback functions has 2 types 
// 1)sychroess

// 2)asyncchronis
// $.get("url", function (data) {
//    $(".result").html(data);
//    alert("Load was performed.");
//    });




// event module

// 1) Node.js has an EventEmitter module that allows you to work with events.
// 2) Events are a way of signaling that something has happened in your code, such as a user clicking a button or a file being saved.
// 3) You can define your own custom events using the EventEmitter module.
// 4) To work with events, you first create an instance of EventEmitter, and then register event listeners using the on method.
// 5) When an event occurs, you can emit the event using the emit method, which will trigger all the registered event listeners for that event.
// 6) Event listeners can be synchronous or asynchronous, and can receive arguments passed to the emit method.
// 7) You can also remove event listeners using the removeListener method.

const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event listener function
const eventListener = (arg) => {
  console.log('Event occurred with argument:', arg);
}

// Register the event listener function with the EventEmitter instance
myEmitter.on('myEvent', eventListener);

// Emit the event, which will trigger the event listener function
myEmitter.emit('myEvent', 'hello world');

