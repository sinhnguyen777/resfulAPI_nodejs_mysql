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
                    }
                    resolve(data);
               })
          })
     }
     static addProduct(name, img, price, price_sale, content, id_catalog){
          return new Promise ((resolve, reject) => {
               var sql = `INSERT INTO product (name, img, price, price_sale, content, id_catalog) VALUES ('${name}', '${img}', ${price}, ${price_sale}, '${content}', (SELECT * FROM catalog WHERE id=${id_catalog}))`
               // var sql = `
               // INSERT INTO product
               // SET name = '${name}', 
               //      img = '${img}',
               //      price = ${price}, 
               //      price_sale = ${price_sale},
               //      content = '${content}',
               //      id_catalog = (
               //           SELECT id
               //           FROM catalog
               //           WHERE name = 'sinh'
               //     )
               // `
               db.query(sql, (err, data) => {
                    data = data;
                    console.log(data);
                    if (err) {
                         return reject(err);
                    }
                    resolve(data)
                    console.log(data);
               })
          })
     }
}
