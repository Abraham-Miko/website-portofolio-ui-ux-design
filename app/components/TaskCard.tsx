import { Task } from '../../types';
import { ExternalLink, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
}

const getPlatformBadgeColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'google drive':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200/60';
    case 'figma':
      return 'bg-purple-50 text-purple-700 border-purple-200/60';
    case 'canva':
      return 'bg-sky-50 text-sky-700 border-sky-200/60';
    case 'github':
      return 'bg-black text-white border-black';
    case 'vercel':
      return 'bg-zinc-100 text-zinc-700 border-zinc-300';
    default:
      return 'bg-zinc-50 text-zinc-600 border-zinc-200';
  }
};

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 text-xs font-bold rounded-full border ${getPlatformBadgeColor(task.platform)}`}>
            {task.platform}
          </span>
        </div>
        <h3 className="font-bold text-zinc-900 text-lg leading-snug mb-3 transition-colors">{task.title}</h3>
        <p className="text-sm text-zinc-500 mb-6 line-clamp-3 leading-relaxed flex-1">{task.description}</p>
        
        <div className="flex items-center gap-1.5 text-xs text-red-400 font-semibold mt-auto mb-5 uppercase tracking-wide">
          <Clock size={14} />
          {new Date(task.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <a 
          href={task.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 hover:bg-zinc-800 hover:text-amber-500 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg"
        >
          Buka Tugas <ExternalLink size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}