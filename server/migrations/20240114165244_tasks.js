/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("tasks", function(table){
        table.increments("id", { primaryKey: true }).unsigned().notNullable();
        table.integer("team_id").notNullable();
        table.foreign("team_id").references("teams.id");
        table.string("description").collate("utf8mb4_unicode_ci").notNullable().defaultTo("");
        table.integer("points").notNullable().defaultTo(10);
        table.integer("sprint").notNullable();
        table.array
        table.enu("status", ['todo', 'doing', 'review', 'done']).defaultTo('todo');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("tasks");  
};
