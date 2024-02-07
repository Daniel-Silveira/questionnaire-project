import { Body, Controller, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create.dto'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/login.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('auth')
@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto)
  }

  @Post('/')
  auth(@Body() auth: LoginDto) {
    return this.authService.auth(auth)
  }
}
