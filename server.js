/**
 * Created by danielscott on 3/19/17.
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let path = require('path');
let port = process.env.PORT || 8080;

// Trying Session
let session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
// End Code

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'client/assets')));
app.use(express.static(path.join(__dirname, 'client/assets/partials')));
app.use(express.static(path.join(__dirname, 'client/assets/css')));
app.use(express.static(path.join(__dirname, 'bower_components/angular')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-route')));
app.use(express.static(path.join(__dirname, 'bower_components/angular-cookies')));


// Order Matters in the below files
require('./server/config/mongoose.js');
let routing = require('./server/config/routes.js');
routing(app);

app.listen(port, function () {
    console.log(`Shield Frequencies Set to ${ port }`)
});
