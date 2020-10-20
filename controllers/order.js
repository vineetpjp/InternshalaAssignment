const Order = require('../models/orderList');
const User = require('../models/user')

module.exports = {
    
  async getRestaurantOrders(req, res) {
    let orders = await Order.find({ restaurantId: req.user.id })
      .populate({
        path: 'restaurantId menuItemId userId'
      })
      .sort('-date');
    res.json(orders);
  },
  async getOrders(req, res) {
    let orders = await Order.find({ userId: req.user.id })
      .populate({
        path: 'restaurantId menuItemId'
      })
      .sort('-date');
    res.json(orders);
  },
   async placeOrder(req,res){

    let user = await User.findById(req.user.id);

    if (user.typeAccess != 'user') {
      return res.json('You must be user');
    }

    let cartItems = req.body.items;
    // {
    //   _id:{
    //     itemName,
    //     description,
    //     foodType,
    //     image,
    //     price,
    //     restaurantId,
    //     quantity,
    //     _id
    //   }
    // }
      let Items = Object.values(cartItems);
      Items = Items.map( item => {
        
        const   userId = req.user.id;
        const menuItemId = item._id
        delete item._id;
        delete item.description
        delete item.image
        delete item.foodType
        delete item.itemName

        return { ...item, userId, menuItemId };
      });
      const orders = await Order.insertMany(Items);
      res.json(orders);
    },
}