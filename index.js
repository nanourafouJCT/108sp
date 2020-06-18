// Connect la bdd
//
const prompts = require('prompts');
const shopService = require('./Services/shopService');
const connect = require('./bdd');
const databaseUrl = 'mongodb://localhost:27017/disk-db';


async function start() {
    console.log('Starting');
    await connect(databaseUrl);
    await shopService.run();
    process.exit(0);

}

start();
