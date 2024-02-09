import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateResponseDto {
  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  questionnaireId: string

  @IsNotEmpty()
  @IsString()
  questionId: string
}
