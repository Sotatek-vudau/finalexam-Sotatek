import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserSevice } from '../user/user.service';
import { SignIn } from './dto/signin.dto';
import { ResponseLogin } from './dto/response.dto';
import * as bcrypt from 'bcrypt';
import { SignUp } from './dto/signup.dto';
import { UserEntity } from 'src/models/entities/user.entity';

@Injectable()
export class AuthService{
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserSevice,
      ) {}

      async getMe(userId: number): Promise<UserEntity> {
        return await this.userService.findUserById(userId);
      }
    
      async signin(loginDto: SignIn): Promise<ResponseLogin> {
        const { email, password } = loginDto;
        const user = await this.userService.findUserByEmail(email);
        if (!user) throw new BadRequestException('Email or password wrong');
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new BadRequestException('Email or password wrong');
    
        const accessToken = this.jwtService.sign({ userId: user.id });
    
        delete user.password;
        return {
          accessToken,
          ...user,
        };
      }

      async signup(signupDto: SignUp): Promise<ResponseLogin> {
        const { email } = signupDto;
        
        const isExisted = await this.userService.checkEmailExisted(email);
        if (isExisted) {
          throw new BadRequestException('Email is existed');
        }
        const user = await this.userService.createUser(signupDto);
        const accessToken = this.jwtService.sign({ userId: user.id });
        
        return {
          accessToken,
          ...user,
        };
      }
}