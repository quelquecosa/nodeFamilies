var worker = exports;
var RSVP = require('rsvp');


var getFamiliesFromDB = function(collection){
    var promise = new RSVP.Promise(function(resolve, reject){
		collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){ 
        	console.log('results:', results);
        	resolve(results);
		});   
    });
    return promise;
}

worker.getFamilies = function(collection){
    return getFamiliesFromDB(collection).then(function(results){
        console.log('here are the fams from the promise', results);
        return JSON.stringify(results);
    });  
};



// var getFamiliesFromDB = function(collection, callback){
// 		collection.find({} ,{limit:10, sort: [['_id',-1]]}).toArray(function(e, results){ 
//         	console.log('results:', results);
//             callback(results);
//     });
// }

// function callback(results){
// 	console.log('here are the fams from the promise', results);
// 	return JSON.stringify(results);
// };  

// worker.getFamilies = function(collection){
//     getFamiliesFromDB(collection, callback);
// };
