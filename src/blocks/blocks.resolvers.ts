import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Block } from '../graphql.schema';
import { BlocksGuard } from './blocks.guard';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';

const pubSub = new PubSub();

@Resolver('Block')
export class BlocksResolvers {
  constructor(private readonly blocksService: BlocksService) {}

  @Query()
  @UseGuards(BlocksGuard)
  async getBlocks() {
    return this.blocksService.findAll();
  }

  @Query('block')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Block> {
    return this.blocksService.findOneById(id);
  }

  @Mutation('createBlock')
  async create(@Args('createBlockInput') args: CreateBlockDto): Promise<Block> {
    const createdBlock = await this.blocksService.create(args);
    pubSub.publish('blockCreated', { blockCreated: createdBlock });
    return createdBlock;
  }

  @Subscription('blockCreated')
  blockCreated() {
    return pubSub.asyncIterator('blockCreated');
  }
}
