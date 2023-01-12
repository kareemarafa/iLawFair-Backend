import { Controller, Get } from '@nestjs/common'
import { StorefrontAppService } from './storefront-app.service'

@Controller()
export class StorefrontController {
  constructor(private readonly appService: StorefrontAppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }
}
