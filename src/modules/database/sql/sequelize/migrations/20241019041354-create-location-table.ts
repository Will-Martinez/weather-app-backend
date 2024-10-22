import { QueryInterface, DataTypes } from "sequelize";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return await queryInterface.createTable("locations", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      iso2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      admin1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lat: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      lon: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      asl: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      timezone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      distance: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      icao: {
        type: DataTypes.STRING,
        allowNull: true
      },
      iata: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postcodes: {
        type: DataTypes.JSON,
        allowNull: false
      },
      featureClass: {
        type: DataTypes.STRING,
        allowNull: false
      },
      featureCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
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
    return await queryInterface.dropTable("locations");
  }
};
