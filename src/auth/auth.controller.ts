import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from '../users/user.dto';
import { ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Đăng ký tài khoản mới' })
  @ApiBody({
    type: RegisterDto,
    examples: {
      example1: {
        summary: 'Ví dụ đăng ký',
        value: {
          username: 'testuser',
          password: 'strongpassword',
        },
      },
    },
  })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: 'Đăng nhập và nhận JWT token' })
  @ApiBody({
    type: LoginDto,
    examples: {
      example1: {
        summary: 'Ví dụ đăng nhập',
        value: {
          username: 'testuser',
          password: 'strongpassword',
        },
      },
    },
  })
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
