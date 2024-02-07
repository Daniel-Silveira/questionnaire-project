import { Table, Column, Model, Unique } from 'sequelize-typescript'

@Table
export class User extends Model {
  @Column
  name: string

  @Unique
  @Column
  email: string

  @Column
  password: string
}
