//DB I/O CONFIG:
var mongoskin = require('mongoskin');
var db = mongoskin.db('mongodb://admin:pentium2@ds063809.mongolab.com:63809/azucar_web', {safe:true});

//INSTAGRAM API CONFIG:
Instagram = require('instagram-node-lib');
Instagram.set('client_id', '5b13fd7d75da4f8aa2aaba33b9ddf534');
Instagram.set('client_secret', '6d2274097779464bb8618623e33701cf');
Instagram.set('redirect_uri', 'http://www.isaacmalca.com/families');



//RUTAS API:

//p: devolver fotos de cuenta @azucaryazuquita en instagram
app.get('/getInsta', function(req, res){
    Instagram.users.recent({ 
        user_id: 1443693450,
        complete: function(data){
            console.log(data);
            res.json(data);
        }
    });
});

//p: devolver tiendas
app.get('/getTiendas', function(req, res){
	collection = db.collection('tiendas');
    collection.find({} ,{limit:500, sort: [['_id',-1]]}).toArray(function(e, results){ 
		console.log('results:', results);
        res.json(results);
	});
});

//almacenar algo en db (no funciona todavia)
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
