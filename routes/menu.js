const express = require('express'),
  router = express.Router(),
  { asyncErrorHandler, auth } = require('../middleware'),
  { createMenu, getMenu } = require('../controllers/menu'),
  { check } = require('express-validator');

    //@Route    post '/api/menu/'
    //@desc     create menu item
    //@access   Private
    
    router.post(
      '/',
      [
        check('', '')
      ],
      auth,
      asyncErrorHandler(createMenu)
    );

    //@Route    get '/api/menu/'
    //@desc     get menu
    //@access   Public
    
    router.get(
      '/',
      asyncErrorHandler(getMenu)
    );

module.exports = router;
