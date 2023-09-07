import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtStrategy } from 'src/auth/strategies/Jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [UserService , JwtStrategy, JwtService],
  controllers: [UserController]
})
export class UserModule {}
