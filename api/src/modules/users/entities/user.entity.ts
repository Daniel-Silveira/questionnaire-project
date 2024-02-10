import { Table, Column, Model, Unique, HasMany } from 'sequelize-typescript'
import { Responses } from 'src/modules/responses/entities/responses.entity'

@Table
export class User extends Model {
  @Column
  name: string

  @Unique
  @Column
  email: string

  @Column
  password: string

  @HasMany(() => Responses)
  responses: Responses[]
}
