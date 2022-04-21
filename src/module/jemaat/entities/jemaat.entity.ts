import { BaptisEntity } from 'src/module/baptis/entities/bapti.entity';
import { Blesscomn } from 'src/module/blesscomn/entities/blesscomn.entity';
import { KelompokMurid } from 'src/module/kelompok_murid/entities/kelompok_murid.entity';
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

  @Column({ nullable: true })
  email?: string;

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

  @ManyToOne(() => Blesscomn, (blesscomn) => blesscomn.jemaat, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  blesscomn?: Blesscomn | null;

  // @ManyToOne(() => WilayahPelayanan, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // wilayah_pelayanan?: WilayahPelayanan | null;

  // @OneToMany(() => KelompokMurid, (murid) => murid.murid, {
  //   nullable: true,
  //   onDelete: 'SET NULL',
  // })
  // kelompok_murid?: KelompokMurid[] | null;

  @OneToOne(() => BaptisEntity, (baptis) => baptis.jemaat, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  baptis?: BaptisEntity | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
