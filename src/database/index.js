const mongo = require('mongoose');
const MONGODB_CLUSTER = process.env.CLUSTERLINK;

//FIXME: Arrumer variavel de ambiente
mongo.connect(MONGODB_CLUSTER);
mongo.Promise = global.Promise;

module.exports = mongo;