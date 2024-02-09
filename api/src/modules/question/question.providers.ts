import { Question } from './entities/question.entity'

export const questionProviders = [
  {
    provide: 'QUESTION_REPOSITORY',
    useValue: Question,
  },
]
