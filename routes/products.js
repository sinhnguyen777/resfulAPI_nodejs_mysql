var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../models/database'); //nhúng module kết nối db
var productController = require('../controllers/products')

router.get('/products', productController.getAll);
router.get('/products/:id', productController.getIdProduct);
router.post('/addNew', productController.addProduct);
router.put('/edit/:id', productController.editProduct);
router.delete('/delete/:id', productController.deleteProduct);
router.get('/category/:id', productController.getProductIdCategory)

module.exports = router;