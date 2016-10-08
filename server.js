// Dependencies requirements, Express 4
var express        = require('express');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose        = require("mongoose");
var app            = express();


app.use(morgan('dev'));
//app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/views'));

//Add the routes
routes = require('./app/routes')(app);

//Database
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database
console.log('Connect DB Remote MongoLab Afiliado');


//app.listen(5000); Puerto par desplegar en Heroku

app.listen(process.env.PORT || 5000)

console.log('Server Active on  port 5000');

 