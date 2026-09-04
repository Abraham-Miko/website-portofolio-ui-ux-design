import { Task } from '@/types';
import { ExternalLink, Edit, Trash2, Clock } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

// Fungsi untuk menentukan warna badge berdasarkan platform
const getPlatformBadgeColor = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'google drive':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case 'figma':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'canva':
      return 'bg-sky-200 text-sky-800 border-sky-300';
    case 'github':
      return 'bg-slate-900 text-white border-slate-700';
    case 'vercel':
      return 'bg-zinc-100 text-zinc-900 border-zinc-300';
    default:
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
  }
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow relative group">
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          {/* Badge Platform dengan warna dinamis */}
          <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getPlatformBadgeColor(task.platform)}`}>
            {task.platform}
          </span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button onClick={() => onEdit(task)} className="p-1.5 text-slate-400 hover:text-indigo-600 rounded bg-slate-50">
              <Edit size={14} />
            </button>
            <button onClick={() => onDelete(task.id)} className="p-1.5 text-slate-400 hover:text-red-600 rounded bg-slate-50">
              <Trash2 size={14} />
            </button>
          </div>
        </div>
        <h3 className="font-bold text-slate-900 text-base mb-2">{task.title}</h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-1">{task.description}</p>
        <div className="flex items-center gap-1 text-xs text-red-500 font-medium mt-auto mb-4">
          <Clock size={14} />
          Deadline: {new Date(task.deadline).toLocaleDateString('id-ID')}
        </div>
      </div>
      <div className="px-5 pb-5">
        <a 
          href={task.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          Buka Tugas <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}