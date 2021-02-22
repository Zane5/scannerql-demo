import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BlocksModule } from './blocks/blocks.module';
import {DateScalar} from './common/scalars/date.scalar';

@Module({
  imports: [
    BlocksModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  providers: [DateScalar],
})
export class AppModule {}
