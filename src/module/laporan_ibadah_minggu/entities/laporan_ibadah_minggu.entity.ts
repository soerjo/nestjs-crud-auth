import { IbadahMinggu } from 'src/module/ibadah_minggu/entities/ibadah_minggu.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class LaporanIbadahMinggu {
  @OneToOne(() => IbadahMinggu)
  nama_ibadah: IbadahMinggu;

  @Column({ type: 'float' })
  kehadiran_pria: number;

  @Column({ type: 'float' })
  kehadiran_perempuan: number;

  @Column({ type: 'float' })
  kehadiran_orang_baru_pria: number;

  @Column({ type: 'float' })
  kehadiran_orang_baru_perempuan: number;

  @Column({ type: 'float' })
  total: number;

  @CreateDateColumn()
  @PrimaryColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
