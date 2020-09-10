// jshint esversion: 7
const product = require(`../controllers/product.controller`);
module.exports = app => {
    // creating routes
    app.route(`/createProduct`)
        .post(product.createProduct);

    app.route(`/getProductsByFilter/:filter/:value`)
        .get(product.getAllProductsByFilter);

    app.route(`/productDetails/:product_id`)
       .get(product.getSingleProduct);

    app.get(`/product-details/`, (req, res) => {
        res.render(`./product/productDetails.views.ejs`);
    });
};