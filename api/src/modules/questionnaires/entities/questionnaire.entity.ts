import { Table, Column, Model, HasMany } from 'sequelize-typescript'
import { Question } from 'src/modules/question/entities/question.entity'
import { Responses } from '../../responses/entities/responses.entity'

@Table
export class Questionnaire extends Model {
  @Column
  name: string

  @Column
  description: string

  @HasMany(() => Question)
  questions: Question[]

  @HasMany(() => Responses)
  responses: Responses[]
}
