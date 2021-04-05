const Product = require('../models/products')
const post = [];
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
    const content = req.body.content;
    const id_catalog = req.body.id_catalog;
    var products = {
        name: name,
        img: img,
        price: price,
        price_sale: price_sale,
        content: content,
        id_catalog: id_catalog
    }
    Product.addProduct(products)
    .then(post => {
        
        res.status(200).json({message: 'Hello post sucessfully', post: post})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}
exports.editProduct = (req, res) => {
    const id = req.params.id
    const name = req.body.name;
    const img = req.body.img;
    const price = req.body.price;
    const price_sale = req.body.price_sale;
    const content = req.body.content;
    
    Product.editProduct(id, name, img, price, price_sale, content)
    .then(post => {
        res.status(200).json({message: 'Hello post sucessfully', post: post})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}

exports.deleteProduct = (req, res) => {
    var id = req.params.id
    Product.deleteProduct(id)
    .then(res.status(200).json({message: 'Hello post delete sucessfully'}))
    .catch(err => {
        res.status(500).json({message: err})
    })
}

exports.getProductIdCategory = (req, res) => {
    var id_catalog = req.params.id
    Product.getProductIdCate(id_catalog)
    .then(post => {
        res.status(200).json({message: 'Hello post sucessfully', post: post})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}