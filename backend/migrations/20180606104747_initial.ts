import * as Knex from "knex";

exports.up = (knex: Knex) => {
    return knex.schema
    .createTable("users", users => {
      users
        .increments("id")
        .unsigned()
        .primary();
      users.string("username").unique();
      users.text("password");
      users.string("displayName");
      users.text("userPhoto").defaultTo("");
      users.text("facebookToken");
      users.text("googleToken");
      users.text("stripeToken");
      users.enum("role", ["bartender", "server", "manager", "customer"]).notNullable();
      users.boolean("isActive").defaultTo(true).notNullable();
    })
    .then(() => {
      return knex.schema.createTable("orders", orders => {
        orders
          .increments("id")
          .unsigned()
          .primary();
        orders
          .integer("users_id")
          .unsigned()
          .notNullable();
        orders.foreign("users_id").references("users.id");
        orders.integer("table");
        orders.enum("status", [
          "ordered",
          "confirmed",
          "made",
          "served",
          "cancelled"
        ]);
        orders.decimal("orderTotal");
        orders.boolean("isPaid").defaultTo(false);
        orders.timestamps(false, true);
      });
    })
    .then(() => {
      return knex.schema.createTable("categories", categories => {
        categories
          .increments()
          .unsigned()
          .primary();
        categories.enum("categoryName", [
          "beer",
          "cocktail",
          "redWine",
          "whiteWine",
          "champagne",
          "vodka",
          "tequila",
          "whiskey",
          "gin",
          "rum",
          "brandy",
          "non-alcoholic",
          "snack",
          "main",
          "dessert"
        ]);
        categories.text("categoryPhoto");
        categories.boolean("isActive").defaultTo(true).notNullable();
      });
    })
    .then(() => {
      return knex.schema.createTable("items", items => {
        items
          .increments()
          .unsigned()
          .primary();
        items.string("itemName");
        items.integer("itemStock").notNullable();
        items
          .integer("categories_id")
          .unsigned()
          .notNullable();
        items.foreign("categories_id").references("categories.id");
        items.decimal("minimumPrice");
        items.decimal("currentPrice");
        items.text("itemPhoto").defaultTo("");
        items.text("itemDescription").defaultTo("");
        items.boolean("isSpecial").defaultTo(false).notNullable();
        items.boolean("isActive").defaultTo(true).notNullable();
      });
    })
    .then(() => {
      return knex.schema.createTable("orders_items", ordersItems => {
        ordersItems
          .increments()
          .unsigned()
          .primary();
        ordersItems
          .integer("orders_id")
          .unsigned()
          .notNullable();
        ordersItems.foreign("orders_id").references("orders.id");
        ordersItems
          .integer("items_id")
          .unsigned()
          .notNullable();
        ordersItems.foreign("items_id").references("items.id");
        ordersItems.decimal("purchasePrice")
        ordersItems
          .enum("ice", ["extra", "normal", "less", "without"])
          .defaultTo("normal");
        ordersItems
          .enum("sweetness", ["extra", "normal", "less", "without"])
          .defaultTo("normal");
        ordersItems
          .enum("garnish", ["extra", "normal", "less", "without"])
          .defaultTo("normal");
      });
    })
    .then(() => {
      return knex.schema.createTable("itemsLog", itemsLog => {
        itemsLog
          .increments()
          .unsigned()
          .primary();
        itemsLog
          .integer("items_id")
          .unsigned()
          .notNullable();
        itemsLog.foreign("items_id").references("items.id");
        itemsLog.timestamps(false, true);
        itemsLog.decimal("itemsLogPrice");
      });
    });
};

exports.down = (knex: Knex) => {
    return knex.schema
    .dropTable("itemsLog")
    .then(() => knex.schema.dropTable("orders_items"))
    .then(() => knex.schema.dropTable("items"))
    .then(() => knex.schema.dropTable("categories"))
    .then(() => knex.schema.dropTable("orders"))
    .then(() => knex.schema.dropTable("users"));
};
