import { Module } from '@nestjs/common';
import { sqlConnectionProvider } from './sql.connection.provider';

@Module({
  providers: [...sqlConnectionProvider],
  exports: [...sqlConnectionProvider],
})
export class SqlConnectionModule {}