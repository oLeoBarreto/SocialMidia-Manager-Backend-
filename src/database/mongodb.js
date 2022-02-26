const mongo = require('mongoose');

mongo.connect('mongo://localhost/SMMenager');
mongo.Promise = global.Promise;

module.exports = mongo;