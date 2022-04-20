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

  @OneToMany(() => Blesscomn, (bc) => bc.wilayah_pelayanan, {
    onDelete: 'SET NULL',
  })
  @JoinTable()
  blesscomn: Blesscomn[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
