import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/models/entities/user.entity';
import { UserRepository } from 'src/models/repositories/user.repository';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserSevice{
    constructor(private readonly userRepository: UserRepository){}

    async findUserByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.findUserByEmail(email);
    }

    async checkEmailExisted(email: string): Promise<boolean> {
        const isExist = await this.userRepository.count({
          where: { email },
        });
        return isExist > 0;
    }

    async checkUsernameExisted(username: string): Promise<boolean> {
        const isExist = await this.userRepository.count({
          where: { username },
        });
        return isExist > 0;
    }

    async findUserById(id: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
          where: { id },
        });
        if (!user) {
          throw new NotFoundException('User not found');
        }
        return user;
    }
    
    async checkUserExisted(id: number): Promise<boolean> {
        const isExist = await this.userRepository.count({
          where: { id },
        });
        return isExist > 0;
    }   

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const { email, password } = createUserDto;
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = await this.userRepository.save({
          email: email,
          password: hashPassword,
          username: "",
          bio: "",
          location:"",
          avatar: ""
        });
        delete newUser.password;
        return newUser;
    }

    // async createProfile(
    //   userId: number,
    //   data: UpdateUserDto,
    // ): Promise<UserEntity> {
    //   const isExist = await this.checkUserExisted(userId);
    //   if (!isExist) {
    //     throw new NotFoundException('User not found');
    //   }
    //   await this.userRepository.update(userId, data);
  
    //   return await this.userRepository.findUserById(userId);
    // }

    async updateProfile(
      userId: number,
      data: UpdateUserDto,
    ): Promise<UserEntity> {
      const isExist = await this.checkUserExisted(userId);
      if (!isExist) {
        throw new NotFoundException('User not found');
      }
      if (data.username) {
        const isUsernameExisted = await this.checkUsernameExisted(data.username);
        if (isUsernameExisted) {
          throw new BadRequestException('Username already exists.');
        }
      }
      await this.userRepository.update(userId, data);
  
      return await this.userRepository.findUserById(userId);
    }
    
}