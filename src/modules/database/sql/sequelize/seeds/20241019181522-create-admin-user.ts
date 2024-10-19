import { QueryInterface, DataTypes } from "sequelize";
import * as argon2 from "argon2";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return await queryInterface.bulkInsert("users", [
      {
        userName: "Admin",
        email: "admin@admin.com",
        password: await argon2.hash(process.env.USER_ADMIN_PASSWORD)
      }
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    return await queryInterface.bulkDelete("users", null, {});
  }
};
