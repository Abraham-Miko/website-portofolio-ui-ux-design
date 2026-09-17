import MemberCard from '../components/MemberCard';
import Breadcrumb from '../components/Breadcrumb';
import { Member } from '../../types';

const mockMembers: Member[] = [
  { id: '1', name: 'Abraham Miko Pratama', nim: '240533600750', role: 'Anggota 1', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang'},
  { id: '2', name: 'Agbita Grace Josepine S', nim: '240533609984', role: 'Anggota 2', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang'},
  { id: '3', name: 'Ahmad Fadhilah', nim: '240533610573', role: 'Anggota 3', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang'},
  { id: '4', name: 'Mohamad Ainur Rofi', nim: '240533610013', role: 'Anggota 4', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang'},
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigasi */}
      <Breadcrumb items={[{ label: 'Profil Anggota' }]} />
      
      {/* Luxurious Banner */}
      <div className="bg-zinc-950 text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Subtle decorative background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-2xl">
          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-3">Profil Anggota</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Profil Anggota Kelompok 8</h2>
          <p className="text-zinc-400 leading-relaxed capitalize">
            Kelompok 8 Mata Kuliah UI/UX Design dari Program Studi Pendidikan Teknik Informatika <br></br>Universitas Negeri Malang angkatan 2024.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}