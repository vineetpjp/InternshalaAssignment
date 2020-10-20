const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
    name: {type: String, required:true},
    email:{type: String, required:true, unique:true },
    password:{type: String, required:true},
    date: { type: Date, default: Date.now },
    typeAccess: {type: String, required: true},
    foodType: {type: String},
    cart :{ totalItems : Number,
            totalPrice: Number,
            items : Object }
})

module.exports = mongoose.model('user',userSchema)

// cart : {
//     totalItems : 1,
//     totalPrice : 20,
//     items : {
//         1 : { menuItem,price:20,quantity:2 } ,
//         2 : { menuItem,price:20,quantity:2 } 
//     }
// }