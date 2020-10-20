const User = require('../models/user');

module.exports = {
    async editCart(req,res){
        let user = await User.findById(req.user.id).select('-password');
        let cart = req.body;
        user.cart = cart;
        await user.save();
        res.json(cart);
    },
    async getCart(req,res){
        let user = await User.findById(req.user.id).select('cart');
        console.log(user)
        let cart = user.cart;
        if(!cart.totalItems){
            cart = {
                totalItems: 0,
                totalPrice: 0,
                items:{}
            }
        }
        
        res.json(cart);
    },
    
}