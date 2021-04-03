var db = require('./database');//chèn model database vào đế kết nối db 
var data = []; //biến để chứa dữ liệu đổ về cho controller
module.exports = class {
     static fetchAll() {
          return new Promise((resolve, reject) => {
               var sql = "SELECT id, name, img, price, price_sale FROM product";
               db.query(sql, (err, data) => {
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
               var sql = `SELECT * FROM product WHERE id=${id}`;
               console.log(sql);
               db.query(sql, (err, data) => {
                    data = data;
                    if (err) {
                         return reject(err);
                    }else{
                         resolve(data)
                         console.log(resolve(data));
                    }
               })
          })
     }



     static addProduct(products){
          return new Promise ((resolve, reject) => {
               console.log(products);
               var sql = `INSERT INTO product SET ?`
               
               db.query(sql, products, (err, data) => {
                    data = data;
                    if (err) {
                         reject(err);
                    }
                    resolve(data)
                    return data;
               })
          })
     }
     
}
