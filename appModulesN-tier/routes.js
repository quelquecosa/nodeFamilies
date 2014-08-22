var engine = require('appModules/engine.js');


//ROUTES FOR API:

app.get('/getFamilies', function(req, res){
	var families = engine.getFamilies();
    console.log (families);
	res.json(families);
});



app.post('/units', function(req, res){
   res.type('text/plain');
   res.send('received'); 
});
  

//custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Bananas');
});

//custom 500 page 
app.use(function(err, req, res, next){
        console.error(err.stack);
	res.type('text/plain');
        res.status(500);
        res.send('500 - Server Error');
});
