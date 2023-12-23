const mongoose = require("mongoose");

async function connectToDatabase(){
  
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/shortUrl',{
            useNewUrlParser: true,
            useUnifiedTopology: true, // Add this option for new versions of Mongoose
        })
        console.log("connnect to :MongoDB");
    }
    catch(err){
        console.log("Error in connecting to database");
    }
}

connectToDatabase();

module.exports = mongoose.connetcion;
