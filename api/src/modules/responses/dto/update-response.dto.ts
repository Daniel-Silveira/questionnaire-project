import { PartialType } from '@nestjs/swagger'
import { ResponseDto } from './create-response.dto'

export class UpdateResponseDto extends PartialType(ResponseDto) {}
