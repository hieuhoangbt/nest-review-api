import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';
import { FlashcardsController } from './flashcards.controller';
import { FlashcardsResolver } from './flashcards.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Flashcard])],
  providers: [FlashcardsService, FlashcardsResolver],
  controllers: [FlashcardsController],
})
export class FlashcardsModule {}
