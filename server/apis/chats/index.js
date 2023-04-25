const express= require('express');
const router= express.Router();

//controllers
const chatController= require('./controller');

//middlewares
const isUserExist= require('./../middlewares/isUserExist')

router.post('/chat', chatController.create);
router.get('/chat', isUserExist, chatController.fetch);

module.exports= router;