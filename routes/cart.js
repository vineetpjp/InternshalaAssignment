const express = require('express'),
  router = express.Router(),
  { asyncErrorHandler, auth } = require('../middleware'),
  { getCart ,editCart } = require('../controllers/cart'),
  { check } = require('express-validator');

    //@Route    put '/api/cart/'
    //@desc     edit the cart
    //@access   Private 
    
    router.put(
      '/',
      auth,
      asyncErrorHandler(editCart)
    );
    
    //@Route    get '/api/cart/'
    //@desc     get cart
    //@access   Private 
    
    router.get(
        '/',
        auth,
        asyncErrorHandler(getCart)
      );

module.exports = router;
