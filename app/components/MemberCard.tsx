import { Member } from '../../types';
import { User, Globe } from 'lucide-react';

export default function MemberCard({ member }: { member: Member }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-24 h-24 bg-zinc-50 border border-zinc-100 text-zinc-800 rounded-full flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
        <User size={40} strokeWidth={1.5} />
      </div>
      <h3 className="font-bold text-zinc-900 text-lg tracking-tight mb-1 capitalize">{member.name}</h3>
      <p className="text-sm font-semibold text-amber-600 mb-2 uppercase tracking-wider">{member.role}</p>
      <div className="w-8 h-0.5 bg-zinc-200 mb-4 rounded-full"></div>
      <p className="text-xs text-zinc-500 mb-1">NIM : {member.nim}</p>
      <p className="text-xs text-zinc-400 mb-6 capitalize">{member.prodi}</p>
    </div>
  );
}