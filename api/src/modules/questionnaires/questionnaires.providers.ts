import { Questionnaire } from './entities/questionnaire.entity'

export const questionnairesProviders = [
  {
    provide: 'QUESTIONNAIRE_REPOSITORY',
    useValue: Questionnaire,
  },
]
