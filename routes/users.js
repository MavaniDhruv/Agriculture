var express = require('express');
var router = express.Router();

var user = require('../controller/userController')

router.post('/',user.u_login)
router.post('/register',user.u_register)
router.get('/view_product',user.view_product)
router.get('/view_single_product/:id',user.view_single_product)
router.post('/add_cart/:id',user.add_cart)
router.post('/create_bill',user.create_bill)

module.exports = router;
