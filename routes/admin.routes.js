// jshint esversion: 7
const admin = require(`../controllers/admin.controller`);
module.exports = app => {
    // creating routes
   app.route(`/admin`)
       .get(admin.login);

    // view routes
   app.route(`/view/products`)
       .get(admin.view);
       
    // creating routes
   app.route(`/add/products`)
       .get(admin.add);
       
    // creating routes
   app.route(`/orders`)
       .get(admin.orders);   
};