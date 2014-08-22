//this is our ENGINE
//it is in charge of delegating tasks to its handlers

//expose the engine object to other modules:
var engine = exports;

//import the handler module
var handler = require('appModules/handler.js');

engine.getFamilies = function(){
    var families = handler.getFamilies();
    return families;
    
}