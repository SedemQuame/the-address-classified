// jshint esversion: 7
// requiring node modules
const http = require(`http`);
const path = require(`path`);
const express = require(`express`);
const morgan = require(`morgan`);
const bodyParser = require(`body-parser`);
const dotenv = require(`dotenv`);
const mongoose = require(`mongoose`);

// ========================================== configure environment constiables  ========================================== //
if(!process.env.MODE){
    const result = dotenv.config({path: `./config/.env`});
    if (result.error) {
        throw result.error;
    }
}

// ========================================== custom packages  ========================================== //
const db = require(`./config/db.config`);
// instantiating new express app
const app = express();

// ========================================== app's global variable  ==================================== //
// const appName = 'Address Classfied';
// app.set("appName", appName);


// serving static files in express
const viewPath = path.resolve(__dirname, `views`);
app.set("views", viewPath);
app.set("view engine", "ejs");

// adding the morgan logger to middleware
// app.use(morgan(`dev`));

// adding middleware to express
app.use(bodyParser.urlencoded({extended: false}));

// connection to the afroprint database cluster.
// ====================================== db configurations ========================================= //
mongoose.Promise = global.Promise;
const connectDB = async () => {
    await mongoose.connect(db.url_production, db.options).then(() => {
        console.log(`DB Connected....`);
    }).catch((err)=>{
        console.log(`Connection timed out.`);
        console.log(`Err: ${err}`);
    });
};
connectDB();

//====================================== registering required routes ========================================//
require(`./routes/admin.routes`)(app);
require(`./routes/collection.routes`)(app);
require(`./routes/designer.routes`)(app);
require(`./routes/product.routes`)(app);
require(`./routes/orders.routes`)(app);
require(`./routes/shop.routes`)(app);
require(`./routes/blog.routes`)(app);
require(`./routes/super.routes`)(app);


// creating some routes
app.all(`/`, function(req, res){
    res.render(`index.views.ejs`);
});

// serving public files
const publicPath = path.resolve(__dirname, `public`);
app.use(express.static(publicPath));

app.use(function(req, res){
    res.end(`404`);
});

// listen for changes on a given port number
const portNumber = (process.env.PORT || 3000 );
http.createServer(app).listen(portNumber, function(){
    console.log(`Classified address app started on port ${portNumber}`);
    console.log(`http://localhost:3000/`);
});
