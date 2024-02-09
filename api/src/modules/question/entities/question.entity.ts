import { Table, Column, Model, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript'
import { Questionnaire } from 'src/modules/questionnaires/entities/questionnaire.entity'
import { Responses } from 'src/modules/responses/entities/responses.entity'

@Table
export class Question extends Model {
  @Column
  description: string

  @ForeignKey(() => Questionnaire)
  @Column
  questionnaireId: number

  @BelongsTo(() => Questionnaire)
  questionnaire: Questionnaire

  @HasMany(() => Responses)
  responses: Responses[]
}
