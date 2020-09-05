//jshint esversion:7
// ===================================== requiring node modules ===================================== //
const mongoose = require(`mongoose`);
const passportLocalMongoose = require(`passport-local-mongoose`);

// ==================================== creating database schema=======================================//

// =========== sub schemas =========/


const addressInfo = new mongoose.Schema({
    country: {type: String},
    addressLine01: {type: String},
    addressLine02: {type: String},
    town: {type: String},
    district: {type: String},
    postcode: {type: String},
});

const customerInfo = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phone: {type: String},
    email: {type: String},
    addressInfo: {type: addressInfo},
});

const orderedItems = new mongoose.Schema({
    product_id: {type: String},
    quanity: {type: Number},
});

const orderSchema = new mongoose.Schema({
    referenceId: {type: String},
    customerInfo: {type: customerInfo},
    orderedItems: [{type: orderedItems}],
    paymentMode: {type: String},
    orderNotes: {type: String},
});

orderSchema.plugin(passportLocalMongoose);
// ==================================== creating schema model =========================================//
module.exports = mongoose.model(`order`, orderSchema);