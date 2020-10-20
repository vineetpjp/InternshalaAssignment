const Menu = require('../models/menuItem');

module.exports = {
    
  async createMenu(req, res) {
    req.body.restaurantId = req.user.id;
    const menu = await Menu.create(req.body);
    res.json(menu);
  },
  
  async getMenu(req, res) {
    const menu = await Menu.find({}).populate('restaurantId').sort('-date');
    res.json(menu);
  }
};