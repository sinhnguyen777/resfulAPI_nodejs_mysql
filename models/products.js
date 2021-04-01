var db = require('./database');//chèn model database vào đế kết nối db 
var data = []; //biến để chứa dữ liệu đổ về cho controller
module.exports = class {
     static fetchAll() {
          return new Promise((resolve, reject) => {
               var connection = db;
               var sql = "SELECT id, name, img, price, price_sale FROM product";
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
     static addProduct(name, img, price, price_sale){
          return new Promise ((resolve, reject) => {
               var connection = db;
               var sql = `INSERT INTO product (name, img, price, price_sale) VALUES ('a', 'sp11.png', 45, 22)`;
               connection.query(sql, (err, data) => {
                    data = data;
                    if (err) {
                         return reject(err);
                    }
                    resolve(data)
               })

          })
     }
}
