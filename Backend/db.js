const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MongoDB

const connectToMongo =  () => {
 mongoose.connect(mongoURI, console.log("Connected to mongo Successful")
    );
}

module.exports = connectToMongo;