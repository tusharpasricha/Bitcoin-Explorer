if (process.env.NODE_ENV !== 'production')
  require('dotenv').config()

const express = require("express");
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

app.listen(8080);
