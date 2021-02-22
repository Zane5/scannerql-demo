import { Min } from 'class-validator';
import { CreateBlockInput } from '../../graphql.schema';

export class CreateBlockDto extends CreateBlockInput {
  @Min(1)
  age: number;
}
