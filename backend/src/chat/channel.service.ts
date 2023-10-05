import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class channelService {
  constructor(private readonly prisma: PrismaService) {}

  // ------------------ create channel Message ------------------
  async createChannelMessage(data: {
    sender: string;
    channel: string;
    message: string;
  }) {
    console.log('check if channel exist', data.channel);
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          username: data.sender,
        },
      });
      let isexist = await this.prisma.channel.findUnique({
        where: {
          name: data.channel,
          // userId: user.id,
        },
      });
      if (!isexist) {
        console.log('not exist and we will creating channel');
        const channel = await this.prisma.channel.create({
          data: {
            name: data.channel,
            user: {
              connect: {
                username: user.username,
              },
            },
          },
        });
      }
      if (!user) {
        throw new Error('User not found');
      }

      // todo channl now will be static
      const channel = await this.prisma.channel.findUnique({
        where: {
          name: data.channel,
          // userId: user.id,
        },
      });
      console.log('creating  message on channel');
      console.log('channel', channel);
      const createChannelMessage = await this.prisma.channelMessage.create({
        data: {
          message: data.message,
          user: {
            connect: {
              username: data.sender,
            },
          },
          channel: {
            connect: {
              id: channel.id,
            },
          },
        },
      });
      console.log('createChannelMessage', createChannelMessage);
      return createChannelMessage;
    } catch (err) {
      console.log(err);
    }
  }

  // ------------------ list channels Messages ------------------

  async listChannelMessages(data: { sender: string; channel: string }) {
    if (!data.channel || !data.sender) {
      // throw new Error('Channel not found');
      return;
    }
    const user = await this.prisma.user.findUnique({
      where: {
        username: data.sender,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const channelId = await this.prisma.channel.findUnique({
      where: {
        name: data.channel,
        // userId: user.id,
      },
    });
    if (!channelId) {
      throw new Error('Channel not found');
    }

    // list all messages for a channel
    const messages = await this.prisma.channel.findMany({
      where: {
        id: channelId.id,
      },
      include: {
        ChannelMessage: {
          include: {
            user: true,
          },
        },
      },
    });
    return messages;
  }


  // ------------------ list channels ------------------
  async listChannels(data: { sender: string; channel: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: data.sender,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const channels = await this.prisma.channel.findMany({
      where: {
        userId: user.id,
      },
      include: {
        user: true,
      },
    });
    return channels;
  }
}
