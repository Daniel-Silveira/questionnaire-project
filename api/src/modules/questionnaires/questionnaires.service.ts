import { Inject, Injectable } from '@nestjs/common'
import { CreateQuestionnaireDto } from './dto/create-questionnaire.dto'
import { UpdateQuestionnaireDto } from './dto/update-questionnaire.dto'
import { Questionnaire } from './entities/questionnaire.entity'

@Injectable()
export class QuestionnairesService {
  constructor(
    @Inject('QUESTIONNAIRE_REPOSITORY')
    private questionnaireModel: typeof Questionnaire
  ) {}

  async create(createQuestionnaireDto: CreateQuestionnaireDto) {
    const questionnaire = await this.questionnaireModel.create({ ...createQuestionnaireDto })

    return { questionnaire }
  }

  async findAll(page: number, limit: number) {
    const offset = (page - 1) * limit

    const questionnaires = await this.questionnaireModel.findAll<Questionnaire>({
      offset,
      limit,
      include: ['questions', 'responses'],
    })

    return { questionnaires, meta: { page, limit, offset } }
  }

  async findOne(id: number) {
    const questionnaire = await this.questionnaireModel.findByPk(id, { include: ['questions'] })

    return { questionnaire }
  }

  async update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    const questionnaireUpdated = await this.questionnaireModel.update(
      { ...updateQuestionnaireDto },
      { where: { id }, returning: true }
    )

    return { questionnaire: questionnaireUpdated }
  }

  async remove(id: number) {
    return await this.questionnaireModel.destroy({ where: { id } })
  }
}
