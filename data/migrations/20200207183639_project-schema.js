
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments().primary();
        tbl.text('name', 128).notNullable();
        tbl.text('description', 256);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
    }).createTable('tasks', tbl => {
        tbl.increments().primary();
        tbl.text('description', 256).notNullable();
        tbl.text('notes', 256);
        tbl.boolean('completed')
            .notNullable()
            .defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects')
};
