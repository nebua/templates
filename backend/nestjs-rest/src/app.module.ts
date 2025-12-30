import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthController } from './health.controller';
import { UsersController } from './users.controller';

@Module({
  imports: [],
  controllers: [AppController, HealthController, UsersController],
  providers: [AppService],
})
export class AppModule {}