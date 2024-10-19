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

@Module({
  imports: [
    ApiDocModule,
    AgendaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [envConfig]
    }),
    JobsModule,
    LogModule,
    MongoConnectionModule,
    SqlConnectionModule,
    UserModule
  ],
})
export class AppModule {}
