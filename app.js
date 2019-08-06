import createError from 'http-errors'
import express from 'express'
import path from 'path'
// import cookieParser from 'cookie-parser';
import passport from 'passport'
import logger from 'morgan'

import profilesRouter from './routes/profiles'
import usersRouter from './routes/users'

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// passport 初始化
app.use(passport.initialize());
console.log(require('./config/passport'))
require('./config/passport')['default'](passport);

app.use('/api/profiles', profilesRouter);
app.use('/api/users', usersRouter);

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
  res.status(err.status || 500).json(err);
  // res.render('error');
});

module.exports = app;
