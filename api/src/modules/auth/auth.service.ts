import * as bcrypt from 'bcrypt'
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common'
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

  async createUser(createUserDto: CreateUserDto) {
    try {
      const { user } = await this.userService.findOneByEmail(createUserDto.email)
      if (!!user) {
        throw new HttpException('BadRequestException', HttpStatus.BAD_REQUEST, {
          description: 'E-mail já cadastrado',
        })
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

      const token = await this.jwtService.signAsync(payload)

      return {
        user: payload,
        token,
      }
    } catch (error) {
      console.log('error', error)
      throw new Error()
    }
  }

  async auth(auth: LoginDto) {
    try {
      const { user } = await this.userService.findOneByEmail(auth.email)
      console.log('user', user?.password)
      const isMatch = user && (await bcrypt.compare(auth.password, user?.password))
      if (!isMatch) {
        throw new UnauthorizedException()
      }
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email,
      }

      const token = await this.jwtService.signAsync(payload)

      return {
        user: payload,
        token,
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}
