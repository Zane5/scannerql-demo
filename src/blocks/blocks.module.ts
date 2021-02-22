import { Module } from '@nestjs/common';
import { BlocksResolvers } from './blocks.resolvers';
import { BlocksService } from './blocks.service';

@Module({
  providers: [BlocksService, BlocksResolvers],
})
export class BlocksModule {}
