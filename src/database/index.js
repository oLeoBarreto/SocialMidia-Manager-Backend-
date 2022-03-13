const mongoose = require('mongoose');
const MONGODB_CLUSTER = process.env.CLUSTERLINK;
const conectString = '';

try {
    mongoose.connect(conectString, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log(" MongoAtlas is connected"));
    mongoose.Promise = global.Promise;
} catch (error) {
    console.log("could not connect");
}

//FIXME: Arrumer variavel de ambiente

module.exports = mongoose;