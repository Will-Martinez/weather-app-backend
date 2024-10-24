import { Sequelize } from 'sequelize-typescript';
import LocationModel from 'src/modules/weather-forecast/entities/location/location.entity';
import ForecastModel from 'src/modules/weather-forecast/entities/forecast/forecast.entity';
import LocationForecastRelationModel from 'src/modules/weather-forecast/entities/location-forecast-relation/location.forecast.relation.entity';

export const sqlConnectionProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: process.env.SQL_DIALECT as 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql',
        host: process.env.SQL_HOST,
        port: parseInt(process.env.SQL_PORT, 10) || 3306,
        username: process.env.SQL_USER_NAME,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DB,
        logging: false
      });
      sequelize.addModels([
        ForecastModel,
        LocationForecastRelationModel,
        LocationModel
      ])
      await sequelize.sync();
      return sequelize;
    },
  },
];