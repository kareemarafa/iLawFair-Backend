/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { CrudConfigService } from '@nestjsx/crud'

CrudConfigService.load({
  query: {
    alwaysPaginate: true,
    limit: 25
  }
})

import { AppModule } from './app/app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)

  const config = new DocumentBuilder().setTitle('Web-builder Open API').setDescription('WebMe API description').setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('swagger', app, document)

  const port = AppModule.port || 3333
  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`)
}

bootstrap()
