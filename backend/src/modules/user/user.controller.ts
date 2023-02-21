import { Body, Controller, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from 'src/shares/decorators/user.decorator';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseDto } from 'src/shares/dtos/response.dto';
import { UserEntity } from 'src/models/entities/user.entity';
import { UserSevice } from './user.service';
@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserSevice,
      ) {}

    // @UseGuards(JwtAuthGuard)
    // @Put("create")
    // async CreateProfile(
    // @GetUser('id') userId: number,
    // @Body() updateUserDto: UpdateUserDto
    // ): Promise<ResponseDto<UserEntity>> {
    // return {
    //   data: await this.userService.createProfile(userId, updateUserDto),
    // };
    // }

    @UseGuards(JwtAuthGuard)
    @Put("update")
    async updateProfile(
    @GetUser('id') userId: number,
    @Body() updateUserDto: UpdateUserDto
    ): Promise<ResponseDto<UserEntity>> {
    return {
      data: await this.userService.updateProfile(userId, updateUserDto),
    };
    }

    

}