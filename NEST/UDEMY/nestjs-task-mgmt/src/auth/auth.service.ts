import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredintialsDto } from './auth-cred.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepo: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredDto: AuthCredintialsDto): Promise<void> {
    return this.userRepo.signUp(authCredDto);
  }

  async signIn(
    authCredDto: AuthCredintialsDto,
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepo.validateUserPassword(authCredDto);

    if (!username) {
      throw new UnauthorizedException('invalid credentials');
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload);

    return { accessToken };
  }
}
