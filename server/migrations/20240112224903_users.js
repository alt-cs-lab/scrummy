/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("users", function(table){
        table.increments("id", { primaryKey: true }).unsigned().notNullable();
        table.string("eid").collate("utf8mb4_unicode_ci").notNullable().unique();
        table.string("wid").collate("utf8mb4_unicode_ci").notNullable();
        table.string("first_name").collate("utf8mb4_unicode_ci").notNullable();
        table.string("last_name").collate("utf8mb4_unicode_ci").notNullable();
        table.string("email").collate("utf8mb4_unicode_ci").notNullable();
        table.enu("role", ["instructor", "learner"]).notNullable().defaultTo("learner");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users");
};
