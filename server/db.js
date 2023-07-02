const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shreenidhi1757:thisisawesome@cluster0.j9rdx8e.mongodb.net/srmeatsmern?retryWrites=true&w=majority'
const mongoDB = async()=>{
    await mongoose.connect(mongoURI,async(err,result)=>{
        if(err){
            console.log("---",err)
        }
        else{
            console.log("connected")
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function(err,data){
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                const foodShop = await mongoose.connection.db.collection("foodShop");

                foodShop.find({}).toArray(function(err,shopData){
                    if(err)console.log(err)
                    else{
                        global.foodShop = shopData;
                        console.log(shopData)
                    }
                })

                foodCategory.find({}).toArray(function(err,catData){
                    if(err)console.log(err)
                    else{
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
            }) 
        }
    });
}

module.exports = mongoDB;

