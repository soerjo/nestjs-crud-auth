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
export class KelompokMurid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_kelompok_murid: string;

  @OneToOne(() => JemaatEntity)
  pembimbing: JemaatEntity;

  @OneToMany(() => JemaatEntity, (jemaat) => jemaat.id)
  murid: JemaatEntity[];

  @Column()
  buku: string;

  @Column({ type: 'float' })
  performance_a_month: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
