import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common'
import { QuestionService } from './question.service'
import { CreateQuestionDto } from './dto/create-question.dto'
import { UpdateQuestionDto } from './dto/update-question.dto'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('question')
@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.create(createQuestionDto)
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.questionService.findAll(page, limit)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionService.findOne(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionService.update(+id, updateQuestionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(+id)
  }
}
