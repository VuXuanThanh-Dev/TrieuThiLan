const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();

router.post('/home', userController.getHome);
router.post('/home', userController.getHome);
router.post('/home', userController.getHome);
router.post('/home', userController.getHome);
router.post('/home', userController.getHome);

module.exports = router;