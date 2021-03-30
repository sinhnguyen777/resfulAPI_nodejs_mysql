var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../models/database'); //nhúng module kết nối db
var productController = require('../controllers/products')

router.get('/product', productController.getAll);
router.get('/product/:id', productController.getIdProduct);

module.exports = router;