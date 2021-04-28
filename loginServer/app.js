var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signUpRouter = require('./routes/signin');
var forgotPassRouter = require('./routes/forgot_password');
var changeForgotPassRouter = require('./routes/changeForgotPass');
var changeRouter = require('./routes/change');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signUpRouter);
app.use('/forgotPassword',forgotPassRouter);
app.use('/changeForgotPassword', changeForgotPassRouter);
app.use('/change', changeRouter);
module.exports = app;
