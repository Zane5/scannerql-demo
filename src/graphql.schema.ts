/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export abstract class CreateBlockInput {
  name?: string;
  age?: number;
}

export abstract class Block {
  id?: number;
  name?: string;
  age?: number;
}

export abstract class IMutation {
  abstract createBlock(createBlockInput?: CreateBlockInput): Block | Promise<Block>;
}

export abstract class IQuery {
  abstract getBlocks(): Block[] | Promise<Block[]>;

  abstract block(id: string): Block | Promise<Block>;

  abstract temp__(): boolean | Promise<boolean>;
}

export abstract class ISubscription {
  abstract blockCreated(): Block | Promise<Block>;
}
