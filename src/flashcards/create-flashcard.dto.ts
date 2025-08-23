import { ApiProperty } from '@nestjs/swagger';

export class CreateFlashcardDto {
  @ApiProperty({ example: 'NestJS là gì?' })
  readonly question: string;

  @ApiProperty({ example: 'Một framework NodeJS mạnh mẽ dựa trên TypeScript.' })
  readonly answer: string;
}

export class UpdateFlashcardDto {
  @ApiProperty({ example: 'NestJS là gì?' })
  readonly question?: string;

  @ApiProperty({ example: 'Một framework NodeJS mạnh mẽ dựa trên TypeScript.' })
  readonly answer?: string;
}
