import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';

@Resolver(() => Flashcard)
export class FlashcardsResolver {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Query(() => [Flashcard], { name: 'flashcards' })
  async findAll() {
    return this.flashcardsService.findAll();
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Flashcard)
  createFlashcard(
    @Args('question') question: string,
    @Args('answer') answer: string,
    @Context() context: { req: { user: { userId: string; username: string } } },
  ) {
    const user = context.req.user;
    return this.flashcardsService.create(
      { question, answer },
      { userId: user.userId, username: user.username },
    );
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Flashcard)
  async updateFlashcard(
    @Args('id') id: string,
    @Args('question', { nullable: true }) question: string,
    @Args('answer', { nullable: true }) answer: string,
  ) {
    const updateData: Partial<Flashcard> = {};
    if (question !== undefined) updateData.question = question;
    if (answer !== undefined) updateData.answer = answer;
    return this.flashcardsService.update(id, updateData);
  }
}
