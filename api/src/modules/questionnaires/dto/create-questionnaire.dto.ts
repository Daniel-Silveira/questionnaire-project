import { IsString, IsNotEmpty } from 'class-validator'
export class CreateQuestionnaireDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string
}
