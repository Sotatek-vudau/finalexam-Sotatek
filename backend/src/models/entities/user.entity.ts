// import { CommentEntity } from './comment.entity';
// import { UserRole, UserStatus } from './../../shares/enums/user.enum';
// import { PostEntity } from './post.entity';
import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({
        unique: true,
    })
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    bio: string;

    @Column()
    location: string;

    @Column()
    avatar: string;
  
    @CreateDateColumn()
    @Expose()
    createdAt: Date;
  
    @UpdateDateColumn()
    @Expose()
    updatedAt: Date;
}