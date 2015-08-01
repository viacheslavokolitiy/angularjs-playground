/**
 * Created by User on 01.08.2015.
 */
var express = require("express");
var app = express();
var path = require("path");
var port = 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/img',express.static(path.join(__dirname, 'static/images')));
app.use('/js',express.static(path.join(__dirname, 'static/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'static/stylesheets')));

app.listen(port, function(){
   console.log("Hello from nodejs");
});

//ROUTES
app.get('/', function (req, res, next) {
   res.render('index', {title: "Hello"});
});

//API ROUTES
//END API ROUTES