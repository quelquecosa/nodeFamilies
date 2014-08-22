//import the express module
var express = require('express');

//create an instance of express
//global variables so that other modules can access it 
app = express();

//Allow  Cross Origin Requests:
app.use(require('cors')());

//import our API routes
require('appModules/routes.js');

//set the 'port' property of our app
app.set('port', process.env.PORT || 3000);

//start our server, listening on that 'port'
app.listen(app.get('port'), function(){
	console.log('Express started on port ' +app.get('port') +'.');
});
