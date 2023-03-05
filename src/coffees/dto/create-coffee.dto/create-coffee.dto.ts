import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: "the name of a coffee."})
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly brand: string;

  @ApiProperty()
  @IsString({ each: true })
  readonly flavors: Array<string>;
}
