import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class IbadahMinggu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nama_ibadah: string;

  @Column()
  waktu_ibadah: string;

  @Column({ type: 'float' })
  everage_attendence_a_month: number;

  @Column({ type: 'float' })
  everage_attendence_a_year: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
