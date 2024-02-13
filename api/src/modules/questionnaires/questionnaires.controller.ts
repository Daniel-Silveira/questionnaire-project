import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common'
import { QuestionnairesService } from './questionnaires.service'
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto'
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('questionnaires')
@Controller('questionnaires')
export class QuestionnairesController {
  constructor(private readonly questionnairesService: QuestionnairesService) {}

  @Post()
  create(@Body() createQuestionnaireDto: CreateQuestionnaireDto) {
    return this.questionnairesService.create(createQuestionnaireDto)
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.questionnairesService.findAll(page, limit)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionnairesService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return this.questionnairesService.update(+id, updateQuestionnaireDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionnairesService.remove(+id)
  }
}
