// jshint esversion: 7
// const dotenv = require('dotenv');
module.exports = {
    url_production: `mongodb+srv://classifiedAdmin:${process.env.AFROPRINT_DB_PASSWORD}@cluster0.bwqff.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    url_development: `mongodb://localhost/afroprint`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
};
