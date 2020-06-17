const mongoose = require('mongoose');

const connection = async (databaseUrl) => {
    await mongoose.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
};

module.exports = connection;
