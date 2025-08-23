import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flashcard } from './flashcard.entity';
import { CreateFlashcardDto } from './create-flashcard.dto';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private readonly flashcardRepo: Repository<Flashcard>,
  ) {}

  findAll() {
    return this.flashcardRepo.find();
  }

  create(dto: CreateFlashcardDto, user: { userId: string; username: string }) {
    const card = this.flashcardRepo.create({
      ...dto,
      userId: user.userId,
    });
    return this.flashcardRepo.save(card);
  }
}
