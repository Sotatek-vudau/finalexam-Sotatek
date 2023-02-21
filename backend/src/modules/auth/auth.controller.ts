import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResponseDto } from 'src/shares/dtos/response.dto';
import { UserEntity } from 'src/models/entities/user.entity';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GetUser } from 'src/shares/decorators/user.decorator';
import { SignUp } from './dto/signup.dto';
import { ResponseLogin } from './dto/response.dto';
import { SignIn } from './dto/signin.dto';

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService) {}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getMe(@GetUser('id') userId: number): Promise<ResponseDto<UserEntity>> {
      return { data: await this.authService.getMe(userId) };
    }
  
    @Post('signup')
    async signup(
      @Body() signupDto: SignUp
    ): Promise<ResponseDto<ResponseLogin>> {
      return { data: await this.authService.signup(signupDto) };
    }
  
    @Post('signin')
    async signin(@Body() signinDto: SignIn): Promise<ResponseDto<ResponseLogin>> {
      return { data: await this.authService.signin(signinDto) };
    }
}
  
