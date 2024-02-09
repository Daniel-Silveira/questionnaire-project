import { Inject, Injectable } from '@nestjs/common'
import { CreateQuestionDto } from './dto/create-question.dto'
import { UpdateQuestionDto } from './dto/update-question.dto'
import { Question } from './entities/question.entity'

@Injectable()
export class QuestionService {
  constructor(
    @Inject('QUESTION_REPOSITORY')
    private questionModel: typeof Question
  ) {}
  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.questionModel.create({ ...createQuestionDto })

    return { question }
  }

  async findAll() {
    const questions = await this.questionModel.findAll<Question>()

    return { questions }
  }

  findOne(id: number) {
    return `This action returns a #${id} question`
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`
  }

  remove(id: number) {
    return `This action removes a #${id} question`
  }
}
