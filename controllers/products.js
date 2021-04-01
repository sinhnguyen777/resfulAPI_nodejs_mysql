const Product = require('../models/products')
const product = [];
// show tất cả
exports.getAll = (req, res) => {
    Product.fetchAll()
    .then(post => {
        // console.log(post);
        res.status(200).json({ message: 'Hello post sucessfully', post: post });
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
}
exports.getIdProduct = (req, res) => {
    var id = req.params.id
    Product.fetchIdProduct(id)
    .then(post => {
        // console.log(post);
        res.status(200).json({ message: 'Hello post sucessfully', post: post });
    })
    .catch(err => {
        res.status(500).json({ message: err })
    })
}

exports.addProduct = (req, res) => {
    const name = req.body.name;
    const img = req.body.img;
    const price = req.body.price;
    const price_sale = req.body.price_sale;
    Product.addProduct(name, img, price, price_sale)
    .then(post => {
        // console.log(post);
        res.status(200).json({message: 'Hello post sucessfully', post: post })
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}