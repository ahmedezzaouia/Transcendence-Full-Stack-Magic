import {Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthJwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  // @Get("qr-code")
  // async getQrcode(@Query('id') id: string) {
  //   return this.userServices.getQrcode(id);
  // }

  @Post('verify2f-login')
  async verify2fLogin(@Req() req) {
    return this.userServices.verify2fLogin(req.body.id, req.body.token);
  }

  @UseGuards(AuthJwtGuard)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.userServices.getUser(id);
  }

  @UseGuards(AuthJwtGuard)
  @Post("enable2fa")
  async enable2fa(@Req() req) {
    return  this.userServices.enable2fa(req.user);
  } 

  @UseGuards(AuthJwtGuard)
  @Post("disable2fa")
  async disable2fa(@Req() req) {
    return this.userServices.disable2fa(req.user);
  }

  @UseGuards(AuthJwtGuard)
  @Post("verify2fa")
  async verify2fa(@Req() req) {
    return this.userServices.verify2fa(req.user, req.body.token);
  }


}
