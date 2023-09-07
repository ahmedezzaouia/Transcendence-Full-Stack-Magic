import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-42';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

// move genearting the secret or qrcode to profile logic
// import { authenticator } from 'otplib';
// import { toDataURL } from 'qrcode';

@Injectable()
export class Passport42Strategy extends PassportStrategy(Strategy, '42') {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {
    super({
      clientID:
        'u-s4t2ud-1ad311a554c8e2ac01fdde4e132ccd080dc14a788de72476d2b2e16e4cf6367b',
      clientSecret:
        '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',
      callbackURL: 'http://localhost:3001/auth/callback',
    });
  }

  async  setUserToken(username:string, token:string) : Promise<User>{
    return await this.prisma.user.update({
      where: {
        username: username,
      },
      data: {
        accessToken: token,
      }
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
  ): Promise<any> {
    try {
      const { username, emails} = profile;

      let user = await this.prisma.user.findUnique({
        where: {
          username: username,
        },
      });

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            username,
            email: emails[0].value,
          },
        });
      }

      if (user.isTwofactorsEnabled === false) {
        const payload = { sub: user.id, username };
        const token = await this.jwt.signAsync(payload, { secret: 'ahmed@amine' });
        user = await this.setUserToken(username, token);
      }

      // user already enabled two factors authenticator
      //     const secret = authenticator.generateSecret();
      //     const otpAuthUrl = authenticator.keyuri(user.email, 'ft_transcendence', secret);
      //     const qrcodeDataUrl = await toDataURL(otpAuthUrl);

      //     console.log("before prisma: ", qrcodeDataUrl)

      //     user = await this.prisma.user.update({
      //       where:{
      //         email: user.email
      //       },
      //       data: {
      //         twofactorsSecret:secret,
      //         qrcodeUrl: qrcodeDataUrl
      //       },
      //     });

      //   console.log("after prima:", user.qrcodeUrl)
      return user;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
