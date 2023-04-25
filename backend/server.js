if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const express = require("express");
const bodyParser=require('body-parser')
const flash = require('express-flash')


const usersRoutes = require('./routes/user-routes');
const commentpostRoutes = require('./routes/commentpost-routes');

const app = express();

app.use(flash());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use('/api/users', usersRoutes);
app.use('/api/posts', commentpostRoutes);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
const err = new Error('Not Found');
err.status = 404;
next(err);
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000);
