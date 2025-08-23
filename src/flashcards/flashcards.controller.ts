import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';
import { CreateFlashcardDto } from './create-flashcard.dto';
import { Flashcard } from './flashcard.entity';
import { FlashcardsService } from './flashcards.service';

// Define a JwtAuthGuard class to use in the decorator
class JwtAuthGuard extends AuthGuard('jwt') {}

@ApiTags('flashcards')
@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Get()
  findAll() {
    return this.flashcardsService.findAll();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() dto: CreateFlashcardDto,
    @Request() req: { user: { userId: string; username: string } },
  ) {
    // req.user chứa thông tin user đã đăng nhập
    return this.flashcardsService.create(dto, req.user);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a flashcard' })
  @ApiResponse({ status: 200, type: Flashcard })
  @Patch(':id')
  @UseGuards(GqlAuthGuard)
  async updateFlashcard(
    @Param('id') id: string,
    @Body() body: Partial<Flashcard>,
  ): Promise<Flashcard | null> {
    return this.flashcardsService.update(id, body);
  }
}
