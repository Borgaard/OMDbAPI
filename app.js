/* Assignment Week4 Tuesday Dec 9

www.omdbapi.com
1. Form where user can type in a movie title
2. User submits form (action="GET") and the server queries the OMDB API for results
3. The results are displayed to the user

*/
// var express    = require('express');
// var app        = express();
// var path       = require('path');
// var request    = require('request');
// var ejs        = require('ejs');
// var path       = require('path');
// var bodyParser = require('body-parser');

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, "views"))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// //render what?
// app.get('/posted', function(req, res) {
// 	app.render('/posted');
// });

// app.get('/', function(req, res) {
//   request("http://omdbapi.com/t="+ req.body.name, function(error, response, body) {
//   	var movies = JSON.parse(body);
//   	res.send("Received movies from "+ body);
//   });
// });

// 
// 
/*CHO'S WALKTHROUGH*/

// var express    = require('express');
// var app        = express();
// var ejs        = require('ejs');
// var path       = require('path');
// var request    = require('request');
// var bodyParser = require('body-parser');

// app.set('view engine', 'ejs');
// app.set('view engine', path.join(__dirname, 'views'));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// app.get('/', function(req, res) {
// 	request('http://www.omdbapi.com/t=', function(error, response, body) {
// 		// var results = JSON.parse(body);
// 		res.send(body);
// 	});
// });

// app.get('/form', function(req, res) {
// 	// res.sendFile(__dirname + './form.ejs');
// 	res.render('form');
// });


// app.listen(8080);








































var express = require('express'),
app					= express(),
path				= require('path'),
bodyParser 	= require('body-parser'),
request     = require('request'),
ejs 				= require('ejs');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':true}));

// app.get('/http://www.omdbapi.com/?=t', function(req, res) {

// })

app.post('/', function(req, res) {
	request('http://www.omdbapi.com/?t='+req.body.movietitle, function(error, response, body) {
		console.log(body);
		var movie = JSON.parse(body);

		// res.render('form');
		// var results = JSON.parse(body);
		//movieResults key in results, movie is JSON var
		res.render('results', {movieResults: movie});
	});
});

app.get('/form', function(req, res) {
	res.render('form')
});

app.listen(3000, function() {
	console.log('Server up!');
});




















