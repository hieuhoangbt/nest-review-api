import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlashcardDto } from './create-flashcard.dto';
import { Flashcard } from './flashcard.entity';

@Injectable()
export class FlashcardsService {
  flashcardRepository: any;
  constructor(
    @InjectRepository(Flashcard)
    private readonly flashcardRepo: Repository<Flashcard>,
  ) {}

  findAll() {
    return this.flashcardRepo.find({
      relations: ['user'],
    });
  }

  create(dto: CreateFlashcardDto, user: { userId: string; username: string }) {
    const card = this.flashcardRepo.create({
      ...dto,
      userId: user.userId,
    });
    return this.flashcardRepo.save(card);
  }

  async update(id: string, updateData: Partial<Flashcard>) {
    await this.flashcardRepo.update(id, updateData);
    return this.flashcardRepo.findOne({
      where: { id },
      relations: ['user'],
    });
  }
}
