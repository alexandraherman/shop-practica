import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationError } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      disableErrorMessages: true,
      exceptionFactory: (errors: ValidationError[]) => {
        
      }
    }),
  );

  app.enableCors({
    origin: '*',
    credentials: true
  })
  await app.listen(3001);
  

}
bootstrap();
