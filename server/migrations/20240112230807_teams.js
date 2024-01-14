/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {  
    return knex.schema
    .createTable("teams", function(table){
        table.increments("id", { primaryKey: true }).unsigned().notNullable();
        table.string("name").collate("utf8mb4_unicode_ci").notNullable();
        table.timestamps(true, true)
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("teams");
};
