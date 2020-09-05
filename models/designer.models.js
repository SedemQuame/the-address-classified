//jshint esversion:7
// ===================================== requiring node modules ===================================== //
const mongoose = require(`mongoose`);
const passportLocalMongoose = require(`passport-local-mongoose`);

// ==================================== creating database schema=======================================//

// =========== sub schemas =========/
const contactSchema = new mongoose.Schema({
    email: {type: String},
    phone: {type: String},
});

const designerSchema = new mongoose.Schema({
    name: {type: String},
    contact: {type: contactSchema},
    store_locations: [{type: String}],
    speciality: {type: String},
    orders: [{type: String}],
});

designerSchema.plugin(passportLocalMongoose);
// ==================================== creating schema model =========================================//
module.exports = mongoose.model(`designer`, designerSchema);