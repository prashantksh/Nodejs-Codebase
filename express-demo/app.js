var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var cookieSession = require('cookie-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const testRouter = require('./routes/test');

var app = express();

//middlewares
const myLogger = function(req, res, next) {
  console.log('Message Logged');
  next();
};

const requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  next();
};

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//session management
app.use(cookieParser());
app.use(
  cookieSession({
    name: 'session',
    keys: ['Grand Secret'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(myLogger);
app.use(requestTime);
app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/test', testRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
