// jshint esversion: 7
const product = require(`../controllers/product.controller`);
module.exports = app => {
    // creating routes
    app.route(`/createProduct`)
        .post(product.createProduct);

    app.route(`/product/update`)
        .post(product.update);

    app.route(`/filter-products/:filter/:value`)
        .get(product.getAllProductsByFilter);

    app.route(`/product-details/:_id`)
       .get(product.getSingleProduct);

    app.get(`/product-details`, (req, res) => {
        res.render(`./product/product.views.ejs`);
    });
};