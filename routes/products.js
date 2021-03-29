var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('../models/database'); //nhúng module kết nối db
var productController = require('../controllers/products')

router.get('/product', productController.getAll);
router.get('/product/:id', productController.getIdProduct);

//  router.get('/', function(req, res, next) {
//     let data = modelProducts.list();
//     res.json(data);
//  });






















router.post('/', function (req, res, next) {
    //chức năng thêm mới record vào table
    //phương thức request: post
    //tiếp nhận dữ liệu gửi trong body request
    //thực hiện chèn record mới vào table 
    //trả về thông báo đã chèn dạng json 
});
router.get('/:id', function (req, res, next) {
    //chức năng trả về chi tiết 1 record
    //phương thức request: get
    //tiếp nhận id của reord trong url
    //lấy ra record theo id từ table
    //trả về chi tiết record dạng json
});
router.put('/:id', function (req, res, next) {
    //chức năng cập nhật record trong table 
    //phương thức request: put
    //tiếp nhận dữ liệu gửi trong body request
    //thực hiện cập nhật record vào table 
    //trả về thông báo json đã cập nhật
});
router.delete('/:id', function (req, res) {
    //chức năng xóa 1 record trong table
    //phương thức request: delete
    //tiếp nhận id trong url
    //thực hiện xóa record
    //trả về thông báo json đã xóa
});
module.exports = router;