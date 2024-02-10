import { IsString, IsNotEmpty, ValidateNested, IsNumber, IsArray } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
export class ResponseDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  questionnaireId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  questionId: number
}
export class CreateResponseDto {
  @ApiProperty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ResponseDto)
  responses: ResponseDto[]
}
