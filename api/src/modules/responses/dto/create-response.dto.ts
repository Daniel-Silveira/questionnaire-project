import { IsString, IsNotEmpty, ValidateNested, IsNumber } from 'class-validator'
import { Type } from 'class-transformer'
export class ResponseDto {
  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  questionnaireId: number

  @IsNotEmpty()
  @IsNumber()
  questionId: number
}
export class CreateResponseDto {
  @ValidateNested({ each: true })
  @Type(() => ResponseDto)
  responses: ResponseDto[]
}
