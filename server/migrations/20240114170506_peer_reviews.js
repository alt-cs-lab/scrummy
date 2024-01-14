/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {  
    return knex.schema
    .createTable("peer_reviews", function(table){
        table.increments("id", { primaryKey: true }).unsigned().notNullable();
        table.foreign("team_id").references("teams.id").notNullable();
        table.foreign("reviewer_id").references("users.id").notNullable();
        table.foreign("reviewee_id").refeerences("users.id").notNullable();
        table.integer("sprint").notNullable();
        table.integer("discussion").notNullable();
        table.integer("on_task").notNullable();
        table.integer("ideas").notNullable();
        table.integer("work_quality").notNullable();
        table.integer("work_quantity").notNullable();
        table.integer("communication").notNullable();
        table.string("comments_for_peer").collate("utf8mb4_unicode_ci").notNullable().defaultTo("");
        table.string("comments_for_instructor").collate("utf8mb4_unicode_ci").notNullable().defaultTo("");
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("peer_reviews");  
};
