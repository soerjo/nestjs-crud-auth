import { JemaatEntity } from 'src/module/jemaat/entities/jemaat.entity';

export interface IBaptis {
  waktu: Date;
  nama_ayah: string;
  nama_ibu: string;
  alamat_ortu: string;
  saksi01: string;
  saksi02: string;
  surat_baptis: string;
  dibaptis_oleh: string;
  jemaatId: JemaatEntity;
  createdAt: Date;
  updatedAt: Date;
}
