import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import {Transport} from "@nestjs/microservices";
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(morgan('dev'));

  app.enableCors()
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const config = new DocumentBuilder()
    .setTitle('Web-builder Open API')
    .setDescription('WebMe API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: AppModule.adminMSPort,
    },
  });
  await app.startAllMicroservices();

  const port = AppModule.port || 3333
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
