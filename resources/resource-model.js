const db = require('../data/db-config.js');

function find() {
    return db('resources');
}

function insert(resourceData) {
    return db('resources').insert(resourceData);
}

module.exports = {
    find,
    insert
};