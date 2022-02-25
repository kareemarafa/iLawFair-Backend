import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AdminSurveyService } from './admin-survey.service'
import { Survey } from './admin-survey.entity'
import { AdminSurveyController } from './admin-survey.controller'

@Module({
  imports: [TypeOrmModule.forFeature([Survey])],
  controllers: [AdminSurveyController],
  providers: [AdminSurveyService],
  exports: [AdminSurveyService]
})
export class AdminSurveyModule {}
