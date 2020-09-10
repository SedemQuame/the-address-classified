// jshint esversion:7
const shop = require(`./../controllers/shop.controller`);
const collection = require(`./../controllers/collection.controller`);
const product = require(`./../controllers/product.controller`);
module.exports = app => {
    // creating routes
    app.route(`/product`)
       .get(product.getAllProducts);

    app.route(`/checkout`)
       .get(shop.checkout);

   app.route(`/wishlist`)
       .get(shop.wishlist);

    app.route(`/cart`)
       .get(shop.cart);   
       
   app.route(`/terms`)
      .get(shop.terms);

   app.route(`/guides`)
      .get(shop.guides);

   app.route(`/jobs`)
      .get(shop.jobs);    

   app.route(`/managers`)
      .get(shop.managers);
      
   app.route(`/contact`)
      .get(shop.show); 

   app.route(`/collection`)
       .get(collection.show); 
   
   app.get(`/shop`, (req, res) => {
      res.render(`./../views/shop/shop.views.ejs`);
   });

   app.get(`/shop/:category`, (req, res) => {
      res.render(`./../views/shop/shop.views.ejs`);
   });
};