//CONNECTION TO MONGODB ATLAS FILE
const mongoose = require('mongoose'); //commonjs
require('dotenv').config();

async function connectDB() {
    await mongoose.connect(process.env.MONGODBATLAS_URI);

    console.log('MongoDB connected');
}

module.exports = { connectDB, mongoose }; //commonjs

