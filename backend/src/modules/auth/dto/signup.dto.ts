import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUp {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}