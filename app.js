var createError = require('http-errors');
require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('express-handlebars');


var app = express();

const subjectRouter = require('./src/routes/subject');
const departmentRouter = require('./src/routes/deparment');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('./src/public')));





app.use('/subject', subjectRouter);
app.use('/department', departmentRouter);

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).send({
    message: 'No se encontro la ruta'
  });
});



// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
