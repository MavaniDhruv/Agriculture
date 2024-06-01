var express = require('express');
var router = express.Router();

var admin = require('../controller/adminController');

router.post('/',admin.a_login)
router.post('/register',admin.a_register)
router.post('/add_product',admin.add_product)
router.get('/view_product',admin.view_product)
router.get('/view_product/:id',admin.view_single_product)
router.post('/update_product/:id',admin.update_product)
router.get('/delete_product/:id',admin.delete_product)

module.exports = router;
