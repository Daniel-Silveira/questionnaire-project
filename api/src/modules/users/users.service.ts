import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private userModel: typeof User
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create({ ...createUserDto })

    return { user }
  }

  async findAll() {
    const users = await this.userModel.findAll<User>()

    return { users }
  }

  async findOneById(id: number) {
    const user = await this.userModel.findByPk(id)

    return { user }
  }

  async findOneByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
    })

    return { user }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userUpdated = await this.userModel.update(
      { ...updateUserDto },
      { where: { id }, returning: true }
    )

    return { user: userUpdated }
  }

  async remove(id: number) {
    return await this.userModel.destroy({ where: { id } })
  }
}
