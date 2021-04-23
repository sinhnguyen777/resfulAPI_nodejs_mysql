var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../models/database'); //nhúng module kết nối db
var categoryController = require('../controllers/category')

router.get('/category', categoryController.getAllCategory);
router.post('/addCategory', categoryController.addCategory);
router.put('/editCategory/:id', categoryController.editCategory);
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

module.exports = router;