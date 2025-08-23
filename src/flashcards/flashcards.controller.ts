import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './create-flashcard.dto';
import { AuthGuard } from '@nestjs/passport';

// Define a JwtAuthGuard class to use in the decorator
class JwtAuthGuard extends AuthGuard('jwt') {}
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

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
}
