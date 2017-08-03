var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var seSSion = require('express-session');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var Book = require('./models/book');
var Author = require('./models/author');
var Genre = require('./models/genre');
var BookInstance = require('./models/bookinstance');
var index = require('./routes/index');
var users = require('./routes/users');
var wiki = require('./routes/wiki');
var catalog = require('./routes/catalog'); //Import routes for "catalog" area of site
var playground = require('./routes/playground'); //Import routes for "catalog" area of site


var app = express();

//control de sesiones
app.use(cookieParser('S3CRE7'));
app.use(seSSion());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/wiki', wiki);
app.use('/catalog', catalog); // Add catalog routes to middleware chain.
app.use('/playground', playground); // Add catalog routes to middleware chain.
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://lucas.alvarez:Satec1235@ds113282.mlab.com:13282/testione';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));




module.exports = app;
