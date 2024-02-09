import { Module } from '@nestjs/common'
import { DatabaseModule } from './core/database/database.module'
import { AuthModule } from './modules/auth/auth.model'
import { UsersModule } from './modules/users/users.module'
import { QuestionnairesModule } from './modules/questionnaires/questionnaires.module'
import { QuestionModule } from './modules/question/question.module'
import { ResponsesModule } from './modules/responses/responses.module'

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UsersModule,
    QuestionnairesModule,
    QuestionModule,
    ResponsesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
