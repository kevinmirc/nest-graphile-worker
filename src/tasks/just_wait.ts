import { NestFactory } from '@nestjs/core';
import { AppService } from '../app.service';
import { AppModule } from '../app.module';

export default async ({ payload }) => {
  const app = await NestFactory.create(AppModule);
  const appService = app.get(AppService);

  await appService.justWait({ seconds: 3 });
}