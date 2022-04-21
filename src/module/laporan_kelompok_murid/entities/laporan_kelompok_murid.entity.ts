import { KelompokMurid } from 'src/module/kelompok_murid/entities/kelompok_murid.entity';
import {
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LaporanKelompokMurid {
  // @OneToOne(() => KelompokMurid, (murid) => murid.id)
  // nama_kelompok_murid: KelompokMurid;

  // @OneToMany(() => KelompokMurid, (murid) => murid.murid)
  // kehadiran_murid: KelompokMurid[];
  // buku: string;

  @CreateDateColumn()
  @PrimaryColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
