import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Component } from './components.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

@Injectable()
export class ComponentsService extends TypeOrmCrudService<Component> {
  constructor(@InjectRepository(Component) repo) {
    super(repo)
  }
}
