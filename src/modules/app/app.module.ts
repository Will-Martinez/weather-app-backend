import { Module } from '@nestjs/common';
import { MongoConnectionModule } from '../database/mongo/mongo.connection.module';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from 'config/envConfig';
import LogModule from '../log/log.module';
import { SqlConnectionModule } from '../database/sql/sql.connection.module';
import UserModule from '../user/user.module';
import ApiDocModule from '../doc/api.doc.module';
import AgendaModule from '../agenda/agenda.module';
import JobsModule from '../jobs/jobs.module';
import WeatherForeCastModule from '../weather-forecast/weather.forecast.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

@Module({
  imports: [
    ApiDocModule,
    AgendaModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
  }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [envConfig]
    }),
    JobsModule,
    LogModule,
    MongoConnectionModule,
    SqlConnectionModule,
    UserModule,
    WeatherForeCastModule
  ],
})
export class AppModule {}
