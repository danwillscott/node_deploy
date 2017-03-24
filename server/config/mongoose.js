/**
 * Created by danielscott on 3/19/17.
 */
console.log('Server: mongoose.js File Loaded');

// require mongoose
const mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
mongoose.plugin(uniqueValidator, { message: '{PATH} Must Be Unique.' });
// require the fs module for loading model files
const fs = require('fs');
// require path for getting the models path
const path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/products_store');// create a variable that points to the path where all of the models live
// mongoose.connect('mongodb://app:myPassword@localhost/appDB'); // TODO uncomment for deployment

let models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});
