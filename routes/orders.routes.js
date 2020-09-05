// jshint esversion: 7
const orders = require(`../controllers/orders.controller`);
module.exports = app => {
    // creating routes
    app.route(`/submitOrder`)
       .post(orders.submitOrders);
};