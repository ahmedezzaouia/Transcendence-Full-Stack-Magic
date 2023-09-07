import { Injectable, Req, Res } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  login(@Res() res) {
    return res.redirect(
      'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-1ad311a554c8e2ac01fdde4e132ccd080dc14a788de72476d2b2e16e4cf6367b&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fauth%2Fcallback&response_type=code',
    );
  }

  callback(@Res() res, @Req() req) {
    const user: User = req.user;
    if (user.isTwofactorsEnabled) {
      return res.redirect(`http://localhost:3000/twofactors?id=${user.id}`);
    } else {
      return res.redirect(`http://localhost:3000/dashboard?id=${user.id}`);
    }
  }

  async getToken(id: string) : Promise<{accessToken: string}> {
    let user: User;
    try {
      user = await this.prisma.user.findUnique({
        where: { id },
      });
      if (!user) throw new Error('User not found');

      if (!user.accessToken)
        throw new Error('Access token not available for this user');

      console.log("gettoken route", user.accessToken);
      return {accessToken: user.accessToken};
    } catch (e) {
      throw new Error('Failed to retrieve access token');
    }
  }
}
