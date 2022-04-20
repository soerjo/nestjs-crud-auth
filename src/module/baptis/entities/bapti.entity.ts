import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBaptis } from '../interfaces/baptis.interface';

@Entity()
export class BaptisEntity implements IBaptis {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date' })
  waktu: Date;

  @Column()
  nama_ayah: string;

  @Column()
  nama_ibu: string;

  @Column()
  alamat_ortu: string;

  @Column()
  saksi01: string;

  @Column()
  saksi02: string;

  @Column()
  surat_baptis: string;

  @OneToOne(() => JemaatEntity, (jemaat) => jemaat.nama_lengkap)
  dibaptis_oleh: string;

  @OneToOne(() => JemaatEntity, (jemaat) => jemaat.id)
  @JoinColumn()
  jemaatId: JemaatEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
