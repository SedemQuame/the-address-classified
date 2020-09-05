 // jshint esversion:7
const shop = require(`./../controllers/shop.controller`);
const collection = require(`./../controllers/collection.controller`);
const product = require(`./../controllers/product.controller`);
module.exports = app => {
    app.get(`/blog`, (req, res)=>{
        res.render(`./../views/blog.ejs`);
    });

    app.get(`/blog-details`, (req, res)=>{
        res.render(`./../views/blog-details.ejs`);
    });    
};