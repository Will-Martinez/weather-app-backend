import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return await queryInterface.createTable("location_weather_forecast", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      locationId: {
        type: DataTypes.UUID,
        references: { model: "locations", key: "uuid" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      forecastId: {
        type: DataTypes.UUID,
        references: { model: "forecast", key: "uuid" },
        allowNull: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface: QueryInterface) => {
    return await queryInterface.dropTable("location_weather_forecast");
  }
};
