import { Sequelize } from 'sequelize-typescript'
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
      sequelize.addModels([User])
      await sequelize.sync()
      return sequelize
    },
  },
]
