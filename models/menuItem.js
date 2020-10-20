const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const menuSchema = mongoose.Schema({
    itemName : {type: String,required:true},
    description : {type : String},
    foodType: {type : String},
    date: { type: Date, default: Date.now },
    price: {type: Number},
    image:{type:String},
    restaurantId :{type:Schema.Types.ObjectId,ref:'user'}
});

module.exports = mongoose.model('menuItem',menuSchema);