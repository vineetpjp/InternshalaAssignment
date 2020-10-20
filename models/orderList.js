const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const orderSchema = mongoose.Schema({
    quantity : { type : Number},
    price : {type : Number},
    menuItemId : { type : Schema.Types.ObjectId ,ref:'menuItem'},
    restaurantId: { type : Schema.Types.ObjectId ,ref:'user'},
    userId :{ type : Schema.Types.ObjectId ,ref:'user'},
    date: { type : Date,default:Date.now}
})

module.exports = mongoose.model('order',orderSchema)
