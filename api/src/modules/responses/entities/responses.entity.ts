import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { Question } from 'src/modules/question/entities/question.entity'
import { Questionnaire } from 'src/modules/questionnaires/entities/questionnaire.entity'
import { User } from 'src/modules/users/entities/user.entity'

@Table
export class Responses extends Model {
  @Column
  description: string

  @ForeignKey(() => Question)
  @Column
  questionId: number

  @BelongsTo(() => Question)
  question: Question

  @ForeignKey(() => Questionnaire)
  @Column
  questionnaireId: number

  @BelongsTo(() => Questionnaire)
  questionnaire: Questionnaire

  @ForeignKey(() => User)
  @Column
  userId: number

  @BelongsTo(() => User)
  user: User
}
