// jshint esversion:7
exports.login = (request, response, next) => {
    response.render('admin/login');
};

exports.view = (request, response, next) => {
    response.render('admin/vproduct');
};

exports.add = (request, response, next) => {
    response.render('admin/aproduct', {msg: null});
};

exports.orders = (request, response, next) => {
    response.render('admin/orders');
};