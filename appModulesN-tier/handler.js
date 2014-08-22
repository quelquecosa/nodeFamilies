var handler = exports;
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://admin:pentium2@ds063439.mongolab.com:63439/families', {safe:true});
var worker = require('appModules/worker.js');


handler.getFamilies = function(){
	collection = db.collection('families');
    var families = worker.getFamilies(collection);
    console.log('families from handler', families)
    return families;
}