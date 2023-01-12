import { Injectable } from '@nestjs/common'

@Injectable()
export class StorefrontAppService {
  getData(): { message: string } {
    return { message: 'Welcome to Storefront-API!' }
  }
}
