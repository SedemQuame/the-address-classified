// jshint esversion: 7
// const dotenv = require('dotenv');
module.exports = {
    url_production: `mongodb+srv://afro_admin:${process.env.CLASSIFIED_ADMIN_PASSWORD}@afroprint.xb1h2.mongodb.net/${process.env.AFRO_DB_NAME}?retryWrites=true&w=majority`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
};
