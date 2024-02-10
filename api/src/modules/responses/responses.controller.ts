import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common'
import { ResponsesService } from './responses.service'
import { CreateResponseDto } from './dto/create-response.dto'
import { UpdateResponseDto } from './dto/update-response.dto'
import { ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '../auth/auth.guard'
import { CurrentUser } from '../auth/decorator/current-user.decorator'

@ApiTags('responses')
@Controller('responses')
export class ResponsesController {
  constructor(private readonly responsesService: ResponsesService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createResponseDto: CreateResponseDto, @CurrentUser('id') userId: number) {
    return this.responsesService.create(createResponseDto, userId)
  }

  @Get()
  findAll() {
    return this.responsesService.findAll()
  }

  @Get('questionnaire/:id')
  findAllByQuestionnaireId(@Param('id') id: string) {
    return this.responsesService.findAllByQuestionnaireId(+id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsesService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponseDto: UpdateResponseDto) {
    return this.responsesService.update(+id, updateResponseDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsesService.remove(+id)
  }
}
