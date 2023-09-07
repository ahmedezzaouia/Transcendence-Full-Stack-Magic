import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { Passport42Strategy } from './strategies/passport.42.startegy';
import { JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/Jwt.strategy';

@Module({
  imports: [PassportModule.register({})],
  controllers: [AuthController],
  providers: [AuthService,  Passport42Strategy, JwtService, JwtStrategy],
  exports: [JwtStrategy, Passport42Strategy, JwtService],
})
export class AuthModule {}
