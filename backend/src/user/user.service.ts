import { Injectable, Req } from '@nestjs/common';
import { User } from '@prisma/client';
import { authenticator } from 'otplib';
import { PrismaService } from 'src/prisma/prisma.service';
import { toDataURL } from 'qrcode';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string): Promise<User> {
    let user: User;
    try {
      user = await this.prisma.user.findUnique({
        where: { id },
      });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new Error('Failed to retrieve user');
    }
  }

  async enable2fa(user: User): Promise<{ qrcodeUrl: string }> {
    try {
      if (user.isTwofactorsEnabled === false) {
        const secret = authenticator.generateSecret();
        const otpAuthUrl = authenticator.keyuri(
          user.email,
          'ft_transcendence',
          secret,
        );
        const qrcodeDataUrl = await toDataURL(otpAuthUrl);
        let updatedUser: User = await this.prisma.user.update({
          where: { username: user.username },
          data: {
            twoFactorsSecret: secret,
            qrcodeUrl: qrcodeDataUrl,
          },
        });
        return { qrcodeUrl: updatedUser.qrcodeUrl };
      }
    } catch (error) {
      throw new Error('Failed to enable 2fa for user');
    }
  }

  async disable2fa(user: User): Promise<{ isDisable: boolean }> {
    try {
      let updatedUser: User;
      if (user.isTwofactorsEnabled === true) {
        updatedUser = await this.prisma.user.update({
          where: { username: user.username },
          data: {
            twoFactorsSecret: null,
            qrcodeUrl: null,
            isTwofactorsEnabled: false,
          },
        });
      }

      console.log('user disabled 2fa === ', updatedUser.isTwofactorsEnabled);
      return { isDisable: !updatedUser.isTwofactorsEnabled ? true : false };
    } catch (error) {
      throw new Error('Failed to disable 2fa for user');
    }
  }

  async verify2fa(user: User, token: string): Promise<{ isValid: boolean }> {
    try {
      const isValid = authenticator.verify({
        token: token,
        secret: user.twoFactorsSecret,
      });

      if (isValid && user.isTwofactorsEnabled === false) {
        await this.prisma.user.update({
          where: { username: user.username },
          data: {
            isTwofactorsEnabled: true,
          },
        });
      }
      return { isValid };
    } catch (error) {
      throw new Error('Failed to verify 2fa for user');
    }
  }

  async getQrcode(id: string): Promise<{ qrcodeUrl: string }> {
    try {

      const user: User = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) throw new Error('User not found');

      console.log('user qrcode === ', user.qrcodeUrl);

      return { qrcodeUrl: user.qrcodeUrl };

    } catch (error) {
      throw new Error('Failed to retrieve user qrcode');
    }
  }

  async verify2fLogin(id : string, token: string): Promise<{ isValid: boolean }> {
    try {
      // get user by id 
      const user: User = await this.prisma.user.findUnique({
        where: { id },
      });

      if (!user) throw new Error('User not found for getting his secret')

      const isValid = authenticator.verify({
        token: token,
        secret: user.twoFactorsSecret,
      });

      return { isValid };
    } catch (error) {
      throw new Error('Failed to verify 2fa for user in first login');
    }
  }

}
