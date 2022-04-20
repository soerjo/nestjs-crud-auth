import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum Role {
  JEMAAT = 'JEMAAT',
  PEMBIMBING = 'PEMBIMBING',
  PELAYAN = 'PELAYAN',
  PEKERJA = 'PEKERJA',
  LEADER = 'LEADER',
  ADMIN = 'ADMIN',
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  createdAt?: Date;

  @CreateDateColumn()
  updatedAt?: Date;
}
