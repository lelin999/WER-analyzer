let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');
// overwrite mongoose.Promise with node's Promise:
mongoose.Promise = global.Promise;
// connect mongoose to mongodb:
mongoose.connect('mongodb://localhost/wer-analyzer');
// store models' path in a variable:
let models_path = path.join(__dirname, '../models')
// 1) get strings of all file names in models_path
// 2) for each filename string, check for substring '.js'
// 3) if substring '.js' is present, run the file using require
fs.readdirSync(models_path).forEach(function(filename){
    if(filename.indexOf('.js') >= 0) require(path.join(models_path, filename));
});
