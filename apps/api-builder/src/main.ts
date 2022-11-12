import {Logger, ValidationPipe} from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({skipMissingProperties: true}));
  app.useGlobalPipes(new ValidationPipe({forbidNonWhitelisted :true, whitelist:true, transform:true}));

  app.enableCors()
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const swaggerOptions = new DocumentBuilder()
    .setTitle('Web-builder Open API')
    .setDescription('WebMe API description')
    .setVersion('1.0')
    .addServer('http://localhost:7100', 'Local')
    .addServer('https://dev.api.user.website-me.com', 'Development')
    .addServer('https://test.api.user.website-me.com', 'Testing')
    .addServer('https://api.user.website-me.com', 'Production')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerOptions)

  SwaggerModule.setup('swagger', app, document)

  const port = AppModule.port || 3333
  const assetsPath = join(__dirname, '../../..', 'public')

  app.useStaticAssets(assetsPath)
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
