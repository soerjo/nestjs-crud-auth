import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';
import { WilayahPelayanan } from 'src/module/wilayah_pelayanan/entities/wilayah_pelayanan.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @OneToOne(() => JemaatEntity, (jemaat) => jemaat.blesscomn)
  @JoinColumn()
  leader: JemaatEntity;

  @OneToMany(() => JemaatEntity, (jemaat) => jemaat.blesscomn)
  @JoinColumn()
  vice_leader: JemaatEntity[];

  @OneToMany(() => JemaatEntity, (jemaat) => jemaat.blesscomn)
  @JoinColumn()
  jemaat: JemaatEntity[];

  @ManyToOne(() => WilayahPelayanan, (wil) => wil.blesscomn, { onDelete: 'SET NULL' })
  @JoinColumn()
  wilayah_pelayanan: WilayahPelayanan;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
