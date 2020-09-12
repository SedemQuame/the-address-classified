// jshint esversion: 7
const admin = require(`../controllers/admin.controller`);
module.exports = app => {
    // creating routes
   app.route(`/admin`)
       .get(admin.login);

    // view routes
   app.route(`/finances`)
       .get(admin.finances);
       
    // creating routes
   app.route(`/products`)
       .get(admin.products);
       
    // creating routes
   app.route(`/orders`)
       .get(admin.orders);
};