import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'
import { Survey } from './admin-survey.entity'
import { AdminSurveyService } from './admin-survey.service'

@Crud({
  model: {
    type: Survey
  }
})
@Controller('admin-survey')
@ApiTags('Admin Survey')
export class AdminSurveyController implements CrudController<Survey> {
  constructor(public service: AdminSurveyService) {}
}
