import { Member } from '@/types';
import { User} from 'lucide-react';

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
        <User size={40} />
      </div>
      <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
      <p className="text-sm font-medium text-indigo-600 mb-1">{member.role}</p>
      <p className="text-xs text-slate-500 mb-1">NIM: {member.nim}</p>
      <p className="text-xs text-slate-400 mb-4">{member.prodi}</p>
    </div>
  );
}