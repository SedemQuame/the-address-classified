// jshint esversion: 7
const admin = require(`../controllers/admin.controller`);
module.exports = app => {
    // creating routes
    app.route(`/admin`)
        .get(admin.login);

    // view routes
    app.route(`/admin/finances`)
        .get(admin.finances);
        
    // creating routes
    app.route(`/admin/products`)
        .get(admin.products);
        
    // creating routes
    app.route(`/admin/orders`)
        .get(admin.orders);

    app.route(`/admin/productInfo/:productId`)
        .get(admin.productDetails);
};