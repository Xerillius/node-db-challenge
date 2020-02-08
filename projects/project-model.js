const db = require('../data/db-config.js');

function find() {
    return db('projects');
}

function insert(projectData) {
    return db('projects').insert(projectData);
}

module.exports = {
    find,
    insert
};
