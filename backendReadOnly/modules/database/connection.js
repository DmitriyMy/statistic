const mongoose = require('mongoose');
const {MONGODB_URI} = require('./config/config');

async function connectDataBase() {
    try {
        // todo add warning option in connect
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DataBase connected!');
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = connectDataBase;