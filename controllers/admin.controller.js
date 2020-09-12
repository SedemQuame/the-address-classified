// jshint esversion:7
exports.login = (request, response, next) => {
    response.render('admin/login');
};

exports.finances = (request, response, next) => {
    response.render('admin/finances');
};

exports.products = (request, response, next) => {
    response.render('admin/product', {msg: null});
};

exports.orders = (request, response, next) => {
    response.render('admin/orders');
};

exports.finances = (request, response, next) => {
    response.render('admin/finance');
};