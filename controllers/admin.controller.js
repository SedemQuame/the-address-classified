// jshint esversion:7
// requiring admin models.
const product = require(`./../models/product.models`);

exports.login = (request, response, next) => {
    response.render('admin/login');
};

exports.finances = (request, response, next) => {
    response.render('admin/finances');
};

exports.products = (request, response, next) => {
    // get all product information.
    product.find().then(products => {
        response.render('admin/product', {
            msg: null,
            products: products,
        });
    }).catch((err) => {
        response.render('admin/product', {
            msg: `Unable to create products.`,
            products: [],
        });
    });
};

exports.orders = (request, response, next) => {
    response.render('admin/orders');
};

exports.finances = (request, response, next) => {
    response.render('admin/finance');
};

exports.productDetails = (request, response, next) => {
    // display product information for CRUD manipulation'
    product.findById(request.params.productId).then(product => {
        response.render(`admin/productDetails.ejs`, {product});
    }).catch(err => {
        response.render(`admin/productDetails.ejs`)
    });
};