var mongoose = require('mongoose');

var user = process.env.DB_USER || '';
var passwd = process.env.DB_PASSWORD || '';
var host = process.env.DB_HOST || '';
var database = process.env.DB_NAME || '';

mongoose.connect('mongodb://'+user+':'+passwd+'@'+host+'/'+database);
module.exports = mongoose;