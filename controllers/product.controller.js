// jshint esversion:7
const product = require(`./../models/product.models`);
const spawn = require(`spawn-password`);

// modules for file upload.
// const multer = require('multer');
const upload = 
// const fs = require('fs');

exports.createProduct = (req, res, next) => {


    // form.parse(req, (err, fields, files) => {
        console.log("Uploading file ...");

        // let tmpFolder = files.productMainPicture.path;
        // console.log(tmpFolder);
        product.create({
            name: req.body.productName,
            category: req.body.productCategory,
            brand: req.body.productBrand,
            color: req.body.productColor,
            price: req.body.productPrice,
            size: req.body.availableSizes,
            quantity: req.body.productQuantity,
            description: req.body.productDescripton,
            // condition: req.body.,
            images: req.body.productImage,
            // designerId: req.body.,
            username: spawn.spawn(),
        }).then(() => {
            // res.render(`./../views/admin/product.ejs`, {msg: `Product profile created successfully.`});
            res.redirect(`/admin/products`)
        }).catch((err) => {
            console.log(err);
            res.end(`Could not create product profile.`);
        });    
    // });    
};

exports.update = async (req, res, next) => {
    console.log(req.body);
        product.updateOne({_id: req.body._id}, req.body)
        .then((docs) => {
            console.log(docs);
            res.redirect(`/admin/productInfo/${req.body._id}`)
        }).catch(err => {
            console.log(err);
            res.redirect(`/admin/productInfo/${req.body._id}`)
        });
};

const fieldsOfInterest = `_id name price images`;
exports.getAllProducts = (req, res, next) => {
    product.find({}, fieldsOfInterest)
    .then(products => {
        res.render(`./../views/product.ejs`, {products});
    }).catch(err => {
        res.render(`./../views/product.ejs`, {products: null});
    });
};

exports.getAllProductsByFilter = (req, res, next) => {
    const filter = req.params.filter, value = req.params.value;
    const obj = {};
    if(filter.equals(`category`)){
        obj.category = `/${value}/`;
    }else if(filter.equals(`brand`)){
        obj.brand = `/${value}/`;
    }else if(filter.equals(`color`)){
        obj.color = `/${value}/`;
    }else if(filter.equals(`price`)){
        obj.price = {$lte: value, $gte: value};
    }
    product.find(obj, fieldsOfInterest)
    .then(products => {
        res.render(`./../views/product.ejs`, {products});
    }).catch(err => {
        res.render(`./../views/product.ejs`, {products: null});
    });
};

exports.getSingleProduct = (req, res, next) => {
    product.findById(req.params._id)
    .then(product => {
        res.render(`./product/product.views.ejs`, {product});
    }).catch(err => {
        res.render(`./product/product.views.ejs`, {product: null});
    });
};
