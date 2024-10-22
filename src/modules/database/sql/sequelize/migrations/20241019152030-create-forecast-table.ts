import { QueryInterface, DataTypes } from "sequelize";


module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return await queryInterface.createTable("forecast", {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      modelrun_updatetime_utc: {
        type: DataTypes.DATE,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      timezone_abbrevation: {
        type: DataTypes.STRING,
        allowNull: true
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      modelrun_utc: {
        type: DataTypes.DATE,
        allowNull: false
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      utc_timeoffset: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      generation_time_ms: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      time: {
        type: DataTypes.JSON,
        allowNull: false
      },
      snowfraction: {
        type: DataTypes.JSON,
        allowNull: false
      },
      windspeed: {
        type: DataTypes.JSON,
        allowNull: false
      },
      temperature: {
        type: DataTypes.JSON,
        allowNull: false
      },
      precipitation_probability: {
        type: DataTypes.JSON,
        allowNull: false
      },
      convective_precipitation: {
        type: DataTypes.JSON,
        allowNull: false
      },
      rainspot: {
        type: DataTypes.JSON,
        allowNull: false
      },
      pictocode: {
        type: DataTypes.JSON,
        allowNull: false
      },
      felttemperature: {
        type: DataTypes.JSON,
        allowNull: false
      },
      precipitation: {
        type: DataTypes.JSON,
        allowNull: false
      },
      isdaylight: {
        type: DataTypes.JSON,
        allowNull: false
      },
      uvindex: {
        type: DataTypes.JSON,
        allowNull: false
      },
      relativehumidity: {
        type: DataTypes.JSON,
        allowNull: false
      },
      sealevelpressure: {
        type: DataTypes.JSON,
        allowNull: false
      },
      winddirection: {
        type: DataTypes.JSON,
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
    return await queryInterface.dropTable("forecast")
  }
};
