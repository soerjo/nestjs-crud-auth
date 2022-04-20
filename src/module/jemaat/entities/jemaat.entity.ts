import { BaptisEntity } from 'src/module/baptis/entities/bapti.entity';
import { KelompokMurid } from 'src/module/kelompok_murid/entities/kelompok_murid.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Gender, Role } from '../interfaces/jemaat.interface';

@Entity()
export class JemaatEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  nama_lengkap: string;

  @Column({ enum: Gender, type: 'enum', default: Gender.LAKI_LAKI })
  jenis_kelamin: Gender;

  @Column({ nullable: true })
  nama_panggilan?: string;

  @Column({ type: 'date', nullable: true })
  tempat_lahir?: string;

  @Column({ type: 'date' })
  tanggal_lahir: Date;

  @Column({ nullable: true, type: 'text' })
  alamat?: string;

  @Column({ type: 'int' })
  umur: number;

  @Column({ type: 'date', nullable: true })
  tanggal_lahir_baru?: Date;

  @Column({ enum: Role, type: 'enum', default: Role.JEMAAT })
  role?: Role;

  @Column({ nullable: true })
  blesscomn?: string;

  @Column({ nullable: true })
  wilayah_pelayanan?: string;

  @OneToMany(() => KelompokMurid, (murid) => murid.id, {
    nullable: true,
  })
  kelompok_murid?: KelompokMurid[];

  @OneToOne(() => BaptisEntity, (baptis) => baptis.id, { nullable: true })
  baptis?: BaptisEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
