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

  async findOne(id: number) {
    const question = await this.questionModel.findByPk<Question>(id)

    return { question }
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    const questionUpdated = await this.questionModel.update(
      { ...updateQuestionDto },
      { where: { id }, returning: true }
    )

    return { question: questionUpdated }
  }

  async remove(id: number) {
    return await this.questionModel.destroy({ where: { id } })
  }
}
