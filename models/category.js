var db = require('./database')
var data = []
module.exports = class {
    static fetchAllCategory() {
        return new Promise((resolve, reject) => {
            var connection = db
            var sql = `SELECT id, name FROM catalog`;
            connection.query(sql, (err, data) => {
                data = data
                // console.log(data);
                if (err) {
                    return reject(err)
                }
                resolve(data)
            })
        })
    }
    static addCategory(category){
        return new Promise ((resolve, reject) => {
            var sql = `INSERT INTO catalog SET ?`
            db.query(sql, category, (err, data) => {
                 data = data;
                 if (err) {
                      reject(err);
                 }
                 resolve(data)
                 return data;
            })
       })
    }
    static editCategory(id, name){
        return new Promise ((resolve, reject) => {
            var sql = `UPDATE catalog SET name = "${name}" where id = ${id} `
                db.query(sql, (err, data) => {
                    data = data;
                    if (err) {
                        reject(err);
                    }
                    resolve(data)
                    return data;
                })
        })
    }
    static deleteCategory(id){
        var sql = `DELETE FROM catalog WHERE id = ${id}`;
        db.query(sql, (err, data) => {
            data = data;
            console.log(data)
            if (err) {
                throw err
            }
        })
    }
}