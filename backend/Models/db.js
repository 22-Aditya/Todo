const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
    .then(()=>{
        console.log("MongoDb is Connected...");
    }).catch((err)=>{
        console.log('MongoDb conn error...',err);
    })