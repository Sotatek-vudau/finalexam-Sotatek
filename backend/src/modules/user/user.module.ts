import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from "src/models/entities/user.entity";
import { UserSevice } from "./user.service";
import { UserRepository } from "src/models/repositories/user.repository";
import { UserController } from "./user.controller";
import { AuthModule } from "../auth/auth.module";

@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity]),
    ],
    providers: [UserSevice, UserRepository],
    controllers: [UserController],
    exports: [UserSevice]
})
export class UsersModule{

}