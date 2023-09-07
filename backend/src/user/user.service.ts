import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: string) : Promise<User> {
    let user: User;
    try {
        user = await this.prisma.user.findUnique({
            where: {id},
        });
        if (!user)  throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error('Failed to retrieve user');
    }
  }

  
}
