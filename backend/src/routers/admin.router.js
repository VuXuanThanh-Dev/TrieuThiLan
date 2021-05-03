const db = require('../configs/db.config');
const express = require('express');
const auth = require('../configs/auth.config'); // check token
const productController = require('../controllers/prouduct.controller');
const accountController = require('../controllers/login.controller');
const router = express.Router();


router.post('/admin/getProduct', productController.getProduct);
router.post('/admin/insertProduct',  auth.checkAuthorization, productController.insertProduct);
router.post('/admin/deleteProduct',  auth.checkAuthorization, productController.deleteProduct);
router.post('/admin/updateProduct',  auth.checkAuthorization, productController.updateProduct);

// login
router.post('/admin/signup', accountController.signup);
router.post('/admin/login', accountController.login);
router.post('/admin/changePassword', auth.checkAuthorization, accountController.changePassword);
// 

module.exports = router;