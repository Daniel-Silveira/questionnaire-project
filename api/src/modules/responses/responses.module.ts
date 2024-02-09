import { Module } from '@nestjs/common'
import { ResponsesService } from './responses.service'
import { ResponsesController } from './responses.controller'
import { responsesProviders } from './responses.providers'

@Module({
  controllers: [ResponsesController],
  providers: [ResponsesService, ...responsesProviders],
})
export class ResponsesModule {}
