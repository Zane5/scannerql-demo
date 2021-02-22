import { Injectable } from '@nestjs/common';
import { Block } from '../graphql.schema';

@Injectable()
export class BlocksService {
  private readonly blocks: Block[] = [{ id: 1, name: 'Block', age: 5 }];

  create(block: Block): Block {
    block.id = this.blocks.length + 1;
    this.blocks.push(block);
    return block;
  }

  findAll(): Block[] {
    return this.blocks;
  }

  findOneById(id: number): Block {
    return this.blocks.find(block => block.id === id);
  }
}
