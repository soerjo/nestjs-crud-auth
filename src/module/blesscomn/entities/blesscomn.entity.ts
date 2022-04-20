import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blesscomn {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_blesscomn: string;

  @OneToOne(() => JemaatEntity, (jemaat) => jemaat.nama_lengkap)
  leader: JemaatEntity;

  @OneToMany(() => JemaatEntity, (jemaat) => jemaat.nama_lengkap)
  vice_leader: JemaatEntity[];

  @OneToMany(() => JemaatEntity, (jemaat) => jemaat.nama_lengkap)
  jemaat: JemaatEntity[];

  @Column({ type: 'float' })
  everage_attendence_a_month: number;

  @Column({ type: 'float' })
  everage_attendence_a_year: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
