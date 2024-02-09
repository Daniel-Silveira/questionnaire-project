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

  async findAll() {
    const questionnaires = await this.questionnaireModel.findAll<Questionnaire>({
      include: ['questions'],
    })

    return { questionnaires }
  }

  async findOne(id: number) {
    const questionnaire = await this.questionnaireModel.findByPk(id, { include: ['questions'] })

    return { questionnaire }
  }

  update(id: number, updateQuestionnaireDto: UpdateQuestionnaireDto) {
    return `This action updates a #${id} questionnaire`
  }

  async remove(id: number) {
    return await this.questionnaireModel.destroy({ where: { id } })
  }
}