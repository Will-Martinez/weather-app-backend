import { QueryInterface, DataTypes } from "sequelize";


module.exports = {
  up: async (queryInterface: QueryInterface) => {
    return await queryInterface.createTable("forecast", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      modelRunUpdateTimeUtc: {
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
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      utcTimeOffSet: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      generationTimeMs: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      precipitationUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      windSpeedUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precipitationProbabilityUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      relativeHumidityUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      temperatureUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      timeUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pressureUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      windDirectionUnit: {
        type: DataTypes.STRING,
        allowNull: false
      },
      time: {
        type: DataTypes.JSON,
        allowNull: false
      },
      snowFraction: {
        type: DataTypes.JSON,
        allowNull: false
      },
      windSpeed: {
        type: DataTypes.JSON,
        allowNull: false
      },
      temperature: {
        type: DataTypes.JSON,
        allowNull: false
      },
      precipitationProbability: {
        type: DataTypes.JSON,
        allowNull: false
      },
      convectivePrecipitation: {
        type: DataTypes.JSON,
        allowNull: false
      },
      rainSpot: {
        type: DataTypes.JSON,
        allowNull: false
      },
      picToCode: {
        type: DataTypes.JSON,
        allowNull: false
      },
      feltTemperature: {
        type: DataTypes.JSON,
        allowNull: false
      },
      precipiration: {
        type: DataTypes.JSON,
        allowNull: false
      },
      isDayLight: {
        type: DataTypes.JSON,
        allowNull: false
      },
      uvIndex: {
        type: DataTypes.JSON,
        allowNull: false
      },
      relativeHumidity: {
        type: DataTypes.JSON,
        allowNull: false
      },
      seaLevelPressure: {
        type: DataTypes.JSON,
        allowNull: false
      },
      windDirection: {
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
