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