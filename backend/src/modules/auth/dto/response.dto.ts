import { UserEntity } from "src/models/entities/user.entity";

export class ResponseLogin extends UserEntity {
    accessToken: string;
  }
  