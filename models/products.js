var db = require('./database');//chèn model database vào đế kết nối db 
var data = []; //biến để chứa dữ liệu đổ về cho controller
module.exports = class {
     static fetchAll() {
          return new Promise((resolve, reject) => {
               var connection = db;
               var sql = "SELECT id, name, imgone, price  FROM product";
               connection.query(sql, (err, data) => {
                    data = data;
                    if (err) {
                         return reject(err);
                    }
                    resolve(data);
               })
          })
     }
     static fetchIdProduct(id) {
          return new Promise((resolve, reject) => {
               var connection = db;
               var sql = `SELECT * FROM product WHERE id=${id}`;
               console.log(sql);
               connection.query(sql, (err, data) => {
                    data = data;
                    if (err) {
                         return reject(err);
                    }
                    resolve(data);
               })
          })
     }
}

// exports.create = function () {
//      //chèn record mới vào table 
// }
// exports.update = function () {
//      //cập nhật record vào table 
// }
// exports.read = function (id) {
//      //trả về chi tiết 1 record từ table 
// }
// exports.delete = function (id) {
//      //xóa 1 record  
// }