import MemberCard from './components/MemberCard';
import { Member } from '../types';

const mockMembers: Member[] = [
  { id: '1', name: 'Abraham Miko Pratama', nim: '240533600750', role: 'Anggota 1', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang', social: '#' },
  { id: '2', name: 'Agbita Grace Josepine S', nim: '240533609984', role: 'Anggota 2', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang', social: '#' },
  { id: '3', name: 'Ahmad Fadhilah', nim: '240533610573', role: 'Anggota 3', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang', social: '#' },
  { id: '4', name: 'Mohamad Ainur Rofi', nim: '240533610013', role: 'Anggota 4', prodi: 'Pendidikan Teknik Informatika 2024 - Universitas Negeri Malang', social: '#' },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-sm mb-8">
        <h2 className="text-2xl font-bold mb-2">Selamat Datang di Portal Kelompok</h2>
        <p className="text-indigo-200">Kelompok 8 UI/UX Design - Pendidikan Teknik Informatika UM 2024.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockMembers.map(member => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}