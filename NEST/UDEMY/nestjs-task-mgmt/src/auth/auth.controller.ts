import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthCredintialsDto } from './auth-cred.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signUp(@Body(ValidationPipe) authCredDto: AuthCredintialsDto): Promise<void> {
    return this.authService.signUp(authCredDto);
  }

  @Post('signin')
  signIn(
    @Body(ValidationPipe) authCredDto: AuthCredintialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredDto);
  }
}
