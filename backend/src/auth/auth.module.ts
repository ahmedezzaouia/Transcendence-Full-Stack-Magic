import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { Passport42Strategy } from './strategies/passport.42.startegy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [PassportModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,  Passport42Strategy, JwtService]
})
export class AuthModule {}
