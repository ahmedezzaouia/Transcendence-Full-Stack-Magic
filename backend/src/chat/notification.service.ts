import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class notificationService {
    constructor (private readonly prisma: PrismaService) {}

    // ------------------ add friend ------------------
    async sendFriendRequest(data: { receiverInvite : string, senderInvite : string }) {
        try{
            const senderUser = await this.prisma.user.findUnique({
                where: {
                    username: data.senderInvite,
                },
            });
            // console.log("senderUser",senderUser)

            const reciverUser = await this.prisma.user.findUnique({
                where: {
                    id: data.receiverInvite,
                },
            });

            // console.log("reciverUser",reciverUser)
            // check if the user is already a friend to each other
            const friendRequest = await this.prisma.friendRequest.findFirst({
                where: {
                    senderId: senderUser.id,
                    receiverId: reciverUser.id,
                },
            });
            if (friendRequest) {
                return friendRequest;
            }

            const friend = await this.prisma.friendRequest.create({
                data: {
                    senderId: senderUser.id,
                    receiverId: reciverUser.id,
                    status: "pending",
                },
            });

            // console.log("friend",friend)

            return friend;
            

        }
        catch(err){
            throw err;
        }
        
    }


    // ------------------ list notification ------------------
    async listFriendRequest(data: { username : string }) {
        try{
            const user = await this.prisma.user.findUnique({
                where: {
                    username: data.username,
                },
                include: {
                    senderRequests: {
                        include: {
                            senderRequests: true,
                        },
                    },
                    receiverRequests: {
                        include: {
                            receiverRequests: true,
                        },
                    },
                },
            });
            // console.log("list friends ",user)
            return user;
        }
        catch(err){
            throw err;
        }
        
    }


    // ------------------ accept friend ------------------
    async acceptFriendRequest(data: { sender : string, receiver : string }) {

        try{
            const senderUser = await this.prisma.user.findUnique({
                where: {
                    username: data.sender,
                },
            });
            // console.log("senderUser",senderUser)

            const reciverUser = await this.prisma.user.findUnique({
                where: {
                    username: data.receiver,
                },
            });

            // check if the user is already are friend to each other
            const isfriend = await this.prisma.friends.findFirst({
                where: {
                    friendId: senderUser.id,
                },
            });

            if (isfriend) {
                console.log("friendRequest alredy frineds",isfriend)
                return isfriend;
            }


            const friend = await this.prisma.friends.create({
                data: {
                    friend: {
                        connect: {
                            id: senderUser.id,
                        },
                    },
                    status: "accepted",
                },
            });

            const addFriendToRecieverTo = await this.prisma.friends.create({
                data: {
                    friend: {
                        connect: {
                            id: reciverUser.id,
                        },
                    },
                    status: "accepted",
                },
            });

            return friend;
        }
        catch(err){
            throw err;
        }
    }
}