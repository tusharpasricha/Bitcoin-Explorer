const mongoose = require('mongoose');
const DB_NAME= require('../constants.js');
require('dotenv').config();
const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO}`,{
               useNewUrlParser: true,
              useUnifiedTopology: true,
              })
        console.log(`Mongo Connected DB host: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("mongo error",error);
    }
}

module.exports = connectDB