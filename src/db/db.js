const mongoose = require('mongoose')

async function connectingDB() {

    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to Resume Analyzer Databse");

}

module.exports = connectingDB