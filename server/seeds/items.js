const db = require('../db');
const faker = require('faker');
const Item = require('../models/item');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const makeItems = async () => {
    const items = [...Array(10)].map(item => {
        return {
            title: faker.commerce.productName(),
            author: faker.name.firstName()
        }
    })
    await Item.insertMany(items)
    console.log("Seeded Items!");
    
}

const run = async () => {
    await makeItems()
    db.close()
}

run()