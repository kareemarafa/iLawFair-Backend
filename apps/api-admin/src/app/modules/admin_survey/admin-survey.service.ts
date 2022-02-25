import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Survey } from './admin-survey.entity'

@Injectable()
export class AdminSurveyService extends TypeOrmCrudService<Survey> {
  constructor(@InjectRepository(Survey) repo) {
    super(repo)
  }
}
