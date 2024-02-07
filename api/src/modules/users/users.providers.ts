import { User } from 'src/users/entities/user.entity'

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: User,
  },
]
