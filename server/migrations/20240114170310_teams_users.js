/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("teams_users", function(table){
        table.increments("id", { primaryKey: true }).unsigned().notNullable();
        table.foreign("team_id").references("teams.id").notNullable();
        table.foreign("users_id").references("users.id").notNullable();
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
