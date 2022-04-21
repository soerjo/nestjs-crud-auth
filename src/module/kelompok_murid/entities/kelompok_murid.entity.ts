import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class KelompokMurid {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nama_kelompok_murid: string;

  @Column()
  buku: string;

  // @OneToOne(() => JemaatEntity)
  // pembimbing: JemaatEntity;

  // @OneToMany(() => JemaatEntity, (jemaat) => jemaat.kelompok_murid)
  // @JoinColumn()
  // murid: JemaatEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
