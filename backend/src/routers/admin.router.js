const db = require('../configs/db.config');
const express = require('express');
const productController = require('../controllers/prouduct.controller');
const accountController = require('../controllers/login.controller');
const router = express.Router();


router.post('/admin/getProduct', productController.getProduct);
router.post('/admin/insertProduct', productController.insertProduct);
router.post('/admin/deleteProduct', productController.deleteProduct);
router.post('/admin/updateProduct', productController.updateProduct);

// login
router.post('/admin/signup', accountController.signup);
router.post('/admin/login', accountController.login);
// 

module.exports = router;