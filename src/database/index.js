const mongoose = require('mongoose');
const conectString = '';

try {
    mongoose.connect(conectString, { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.Promise = global.Promise;
    console.log('//=================================//');
    console.log(" MongoAtlas is connected");
} catch (error) {
    console.log("could not connect: " + error);
}

module.exports = mongoose;