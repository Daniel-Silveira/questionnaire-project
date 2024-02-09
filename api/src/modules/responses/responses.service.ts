import { Inject, Injectable } from '@nestjs/common'
import { UpdateResponseDto } from './dto/update-response.dto'
import { Responses } from './entities/responses.entity'

@Injectable()
export class ResponsesService {
  constructor(
    @Inject('RESPONSE_REPOSITORY')
    private responseModal: typeof Responses
  ) {}

  async create(createResponseDto) {
    const response = await this.responseModal.bulkCreate<Responses>(createResponseDto)

    return { response }
  }

  async findAll() {
    const responses = await this.responseModal.findAll<Responses>()

    return { responses }
  }

  async findOne(id: number) {
    const response = await this.responseModal.findByPk<Responses>(id)

    return { response }
  }

  async update(id: number, updateResponseDto: UpdateResponseDto) {
    const responseUpdated = await this.responseModal.update(
      { ...updateResponseDto },
      { where: { id }, returning: true }
    )

    return { response: responseUpdated }
  }

  async remove(id: number) {
    return await this.responseModal.destroy({ where: { id } })
  }
}
