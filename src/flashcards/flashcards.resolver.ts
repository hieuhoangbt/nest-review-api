import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FlashcardsService } from './flashcards.service';
import { Flashcard } from './flashcard.entity';

@Resolver(() => Flashcard)
export class FlashcardsResolver {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Query(() => [Flashcard], { name: 'flashcards' })
  findAll() {
    return this.flashcardsService.findAll();
  }

  @Mutation(() => Flashcard)
  createFlashcard(
    @Args('question') question: string,
    @Args('answer') answer: string,
    @Args('userId') userId: string,
  ) {
    return this.flashcardsService.create(
      { question, answer },
      { userId, username: '' },
    );
  }
}
