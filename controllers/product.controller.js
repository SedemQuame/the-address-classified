// jshint esversion:7
const product = require(`./../models/product.models`);
const spawn = require(`spawn-password`);
exports.createProduct = (req, res, next) => {
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
    product.findById(req.params.product_id)
    .then(product => {
        res.render(`./../views/productDetails.ejs`, {product});
    }).catch(err => {
        res.render(`./../views/productDetails.ejs`, {product: null});
    });
};
