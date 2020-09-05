//jshint esversion:7
// ===================================== requiring node modules ===================================== //
const mongoose = require(`mongoose`);
const passportLocalMongoose = require(`passport-local-mongoose`);
// ==================================== creating database schema=======================================//

// =========== sub schemas =========/
const productSchema = new mongoose.Schema({
    name: {type: String},
    category: {type: String},
    brand: {type: String},
    color: {type: String},
    price: {type: String},
    size: {type: String},
    quantity: {type: String},
    images: [{type: String}],
    condition: {type: String},
    aggregateRating: {type: String},
    reviews: {type: String},
    designerId: {type: String},
});

productSchema.plugin(passportLocalMongoose);
// ==================================== creating schema model =========================================//
module.exports = mongoose.model(`product`, productSchema);