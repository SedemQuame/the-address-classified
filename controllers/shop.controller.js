// jshint esversion:7
exports.checkout = (request, response, next) => {
    response.render('checkout');
};

exports.cart = (request, response, next) => {
    response.render('cart');
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
    response.render('contact');
};