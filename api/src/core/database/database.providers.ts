import { Sequelize } from 'sequelize-typescript'
import { Question } from 'src/modules/question/entities/question.entity'
import { Questionnaire } from 'src/modules/questionnaires/entities/questionnaire.entity'
import { Responses } from 'src/modules/responses/entities/responses.entity'
import { User } from 'src/modules/users/entities/user.entity'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
      })
      sequelize.addModels([User, Questionnaire, Question, Responses])
      await sequelize.sync()
      return sequelize
    },
  },
]
