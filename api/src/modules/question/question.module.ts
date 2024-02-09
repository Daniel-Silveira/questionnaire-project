import { Module } from '@nestjs/common'
import { QuestionService } from './question.service'
import { QuestionController } from './question.controller'
import { questionProviders } from './question.providers'

@Module({
  controllers: [QuestionController],
  providers: [QuestionService, ...questionProviders],
})
export class QuestionModule {}
