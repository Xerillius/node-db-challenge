
exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .unique()
            .notNullable();
        tbl.text('description', 256);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
