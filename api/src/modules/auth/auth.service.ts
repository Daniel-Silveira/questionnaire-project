import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateUserDto } from './dto/create.dto'
import { LoginDto } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userService.findOneByEmail(createUserDto.email)
      if (!!user) {
        return 'E-mail já cadastrado'
      }
      const saltOrRounds = 10
      const password = await bcrypt.hash(createUserDto.password, saltOrRounds)
      const { user: newUser } = await this.userService.create({
        ...createUserDto,
        password,
      })
      const payload = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      }
      return await this.jwtService.signAsync(payload)
    } catch (error) {
      console.log('error', error)
      throw new Error()
    }
  }

  async auth(auth: LoginDto) {
    try {
      const { user } = await this.userService.findOneByEmail(auth.email)
      const isMatch = user && (await bcrypt.compare(auth.password, user?.password))
      if (!isMatch) {
        throw new UnauthorizedException()
      }
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      }
      return await this.jwtService.signAsync(payload)
    } catch (error) {
      throw new Error(error)
    }
  }
}
