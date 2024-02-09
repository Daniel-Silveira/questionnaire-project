import { Responses } from './entities/responses.entity'

export const responsesProviders = [
  {
    provide: 'RESPONSE_REPOSITORY',
    useValue: Responses,
  },
]
