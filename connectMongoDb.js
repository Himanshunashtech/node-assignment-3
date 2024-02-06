const mongoose=require("mongoose");


const connectMongoDb = async function (url){
   return  mongoose.connect(url);

};

module.exports = connectMongoDb;
