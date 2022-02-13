import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ComponentsEntity } from './components.entity'

@Module({
  imports: [TypeOrmModule.forFeature([ComponentsEntity])],
  controllers: [],
  providers: [],
  exports: []
})
export class ComponentsModule {}
