import { Module } from '@nestjs/common';
import { mongoConnectionProvider } from './mongo.connetion.provider';

@Module({
  providers: [...mongoConnectionProvider],
  exports: [...mongoConnectionProvider],
})
export class MongoConnectionModule {}