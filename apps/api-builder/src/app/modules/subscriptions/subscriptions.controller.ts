import { Crud, CrudController } from '@nestjsx/crud'
import { Subscription } from './subscriptions.entity'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Controller } from '@nestjs/common'
import { SubscriptionsService } from './subscriptions.service'

@Crud({
  model: {
    type: Subscription
  }
})
@ApiBearerAuth()
@Controller('subscriptions')
@ApiTags('Subscriptions')
export class SubscriptionsController implements CrudController<Subscription> {
  constructor(public service: SubscriptionsService) {}
}
