import { Injectable } from '@nestjs/common'

@Injectable()
export class TenantAppService {
  getData(): { message: string } {
    return { message: 'Welcome to api-builder!' }
  }
}
