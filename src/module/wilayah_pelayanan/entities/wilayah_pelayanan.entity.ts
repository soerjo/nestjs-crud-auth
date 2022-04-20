import { Blesscomn } from 'src/module/blesscomn/entities/blesscomn.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class WilayahPelayanan {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_wilayah_pelayanan: string;

  @OneToMany(() => Blesscomn, (blesscomn) => blesscomn.id)
  @JoinTable()
  blesscomn: Blesscomn[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
