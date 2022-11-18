import { Controller, Get } from '@nestjs/common'
import { TenantAppService } from './tenant-app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: TenantAppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }
}
