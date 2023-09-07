import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthJwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
  constructor(private userServices: UserService) {}

  @UseGuards(AuthJwtGuard)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userServices.getUser(id);
  }
}
