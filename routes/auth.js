const express = require('express'),
  router = express.Router(),
  { asyncErrorHandler ,auth } = require('../middleware'),
  { register,login,getAccountDetails } = require('../controllers/auth'),
  { check } = require('express-validator');

    //@Route    post '/api/auth/register'
    //@desc     register the user
    //@access   Public
    
    router.post(
      '/register',
      [
        check('email', 'Enter valid Email').isEmail(),
        check('password', 'Enter a password with length 4 or more').isLength({min : 4 }),
      ],
      asyncErrorHandler(register)
    );

    //@Route    post '/api/auth/login'
    //@desc     to login the user
    //@access   Public
    
    router.post(
      '/login',
      [
        check('email', 'Enter a valid email').isEmail(),
        check('password', 'Please enter the password').exists(),
      ],
      asyncErrorHandler(login)
    );

    //@Route    get '/api/auth/accountDetails'
    //@desc     to get the user account details
    //@access   Private
    
    router.get(
      '/accountDetails',
      auth,
      asyncErrorHandler(getAccountDetails)
    );

module.exports = router;
