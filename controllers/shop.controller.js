const { response } = require("express");
const product = require(`./../models/product.models`);

// jshint esversion:7
exports.checkout = (request, response, next) => {
    response.render('./shop/checkout.views.ejs');
};

exports.cart = (request, response, next) => {
    response.render('./shop/cart.views.ejs');
};

exports.wishlist = (request, response, next) => {
    response.render('./shop/wishlist.views.ejs');
};

exports.terms = (request, response, next) => {
    response.render('terms');
};

exports.guides = (request, response, next) => {
    response.render('guides');
};

exports.jobs = (request, response, next) => {
    response.render('jobs');
};

exports.managers = (request, response, next) => {
    response.render('managers');
};

exports.show = (request, response, next) => {
    response.render('./shop/contact.views.ejs');
};

exports.displayProducts = (request, response, next) => {
    product.find({}).then(products => {
        response.render(`./../views/shop/shop.views.ejs`, {
            category: ``,
            item: "",
            data: products,
            displayCategories: false
        });
    }).catch(err => {
        response.render(`./../views/shop/shop.views.ejs`, {
            category: ``,
            item: "",
            data: [],
            displayCategories: false
        });
    });
};