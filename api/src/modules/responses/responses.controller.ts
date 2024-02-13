import { Controller, Get, Post, Body, Param, Delete, UseGuards, Query, Put } from '@nestjs/common'
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
  async findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.responsesService.findAll(page, limit)
  }
  @Get('questionnaire/:id')
  findAllByQuestionnaireId(@Param('id') id: string) {
    return this.responsesService.findAllByQuestionnaireId(+id)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responsesService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResponseDto: UpdateResponseDto) {
    return this.responsesService.update(+id, updateResponseDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responsesService.remove(+id)
  }
}
