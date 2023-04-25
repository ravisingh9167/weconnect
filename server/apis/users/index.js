const express= require('express');
const router= express.Router();

//controllers
const userController= require('./controller');

//middlewares
const isUserExist= require('./../middlewares/isUserExist')

router.post('/signup', userController.signup);
router.post('/sendotp', userController.login);
router.post('/login', isUserExist, userController.login);
router.get('/connections', isUserExist, userController.getConnections);

module.exports= router;