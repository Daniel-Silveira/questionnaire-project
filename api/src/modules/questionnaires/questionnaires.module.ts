import { Module } from '@nestjs/common'
import { QuestionnairesService } from './questionnaires.service'
import { QuestionnairesController } from './questionnaires.controller'
import { questionnairesProviders } from './questionnaires.providers'

@Module({
  controllers: [QuestionnairesController],
  providers: [QuestionnairesService, ...questionnairesProviders],
})
export class QuestionnairesModule {}
