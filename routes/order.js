const express = require('express'),
  router = express.Router(),
  { asyncErrorHandler, auth } = require('../middleware'),
  { getOrders,placeOrder ,getRestaurantOrders} = require('../controllers/order'),
  { check } = require('express-validator');

    //@Route    post '/api/order/'
    //@desc     create orderr
    //@access   Private
    
    router.post(
      '/',
      auth,
      asyncErrorHandler(placeOrder)
    );

    //@Route    get '/api/order/restaurant'
    //@desc     get orders
    //@access   Private
    
    router.get(
      '/restaurant',
      auth,
      asyncErrorHandler(getRestaurantOrders)
    );

    //@Route    get '/api/order/user'
    //@desc     get orders
    //@access   Private
    
    router.get(
      '/user',
      auth,
      asyncErrorHandler(getOrders)
    );

module.exports = router;
