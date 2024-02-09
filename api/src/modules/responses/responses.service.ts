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

  findOne(id: number) {
    return `This action returns a #${id} response`
  }

  update(id: number, updateResponseDto: UpdateResponseDto) {
    return `This action updates a #${id} response`
  }

  remove(id: number) {
    return `This action removes a #${id} response`
  }
}
