const Category = require('../models/category')
const cata = []
exports.getAllCategory = (req, res) => {
    Category.fetchAllCategory()
    .then(cata => {
        // console.log(cata);
        res.status(200).json({ message: 'Hello category sucessfully', cata: cata })
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}
exports.addCategory = (req, res) => {
    const name = req.body.name;
    console.log(name);
    var category = {
        name: name
    }

    Category.addCategory(category)
    .then(cata => {
        
        res.status(200).json({message: 'Hello cata sucessfully', cata: cata})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}

exports.editCategory = (req, res) => {
    const id = req.params.id
    const name = req.body.name;

    Category.editCategory(id, name)
    .then(post => {
        res.status(200).json({message: 'Hello post sucessfully', cata: post})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
}

exports.deleteCategory = (req, res) => {
    var id = req.params.id
    Category.deleteCategory(id)
    .then(res.status(200).json({message: 'Hello post delete sucessfully'}))
    .catch(err => {
        res.status(500).json({message: err})
    })
}