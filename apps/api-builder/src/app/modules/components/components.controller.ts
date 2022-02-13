import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { Component } from './components.entity'
import { ComponentsService } from './components.service'
import { ApiTags } from '@nestjs/swagger'

@Crud({
  model: {
    type: Component
  }
})
@Controller('components')
@ApiTags('Components')
export class ComponentsController implements CrudController<Component> {
  constructor(public service: ComponentsService) {}
}
