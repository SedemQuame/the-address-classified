// jshint esversion: 7
// const dotenv = require('dotenv');
module.exports = {
    url_production: `mongodb+srv://classifiedAdmin:${process.env.CLASSIFIED_ADMIN_PASSWORD}@classified.kmpga.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
};
