import { IsString, IsNotEmpty, IsNumber } from 'class-validator'

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  questionnaireId: number
}
