const db = require('../data/db-config.js');

function find() {
    return db('tasks as t')
        .join('projects as p', 't.project_id', '=', 'p.id')
        .select('t.id', 't.description', 't.notes', 'p.name as Project Name', 'p.description as Project Description');
}

function insert(taskData) {
    return db('tasks').insert(taskData);
}

module.exports = {
    find,
    insert
};