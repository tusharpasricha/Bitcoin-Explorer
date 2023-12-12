const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const { db } = require('./models/User');

const app = express();
const port = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'));

app.use(bodyParser.json());
app.use(cors());
app.use('/api', authRoutes);
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});