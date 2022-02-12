import { Body, Controller, Get, Post } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  data = {}
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData()
  }

  @Get('section')
  getSection(): any {
    return this.data
  }

  @Post('section')
  postSection(@Body() data: any): void {
    this.data = data
  }
}
