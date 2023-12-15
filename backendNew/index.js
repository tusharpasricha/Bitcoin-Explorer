const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config({
  path : '../.env'
});

const authRoutes = require('./src/routes/auth');
const connectDB = require('./src/db/index');

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;


//connectDB();

mongoose
  .connect("mongodb+srv://tusharpasricha:ixGHTrTB2aXR0hOn@cluster0.cufruka.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB is Connected'));


app.use(bodyParser.json());

app.use('/api', authRoutes);
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});