const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shreenidhi1757:thisisawesome@cluster0.j9rdx8e.mongodb.net/srmeatsmern?retryWrites=true&w=majority'
const mongoDB = async()=>{
    await mongoose.connect(mongoURI,(err,result)=>{
        if(err){
            console.log("---",err)
        }
        else{
            console.log("connected")
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( function(err,data){
                if(err)console.log(err)
                else console.log()
            }) 
        }
    });
}

module.exports = mongoDB;

