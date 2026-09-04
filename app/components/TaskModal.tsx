import { useState, useEffect } from 'react';
import { Task } from '@/types';
import { X } from 'lucide-react';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  initialData?: Task | null;
  category: 'industri' | 'pendidikan';
}

export default function TaskModal({ isOpen, onClose, onSave, initialData, category }: TaskModalProps) {
  const [formData, setFormData] = useState<Partial<Task>>({});

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({ category, platform: 'Google Drive' });
    }
  }, [initialData, isOpen, category]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: initialData?.id || Date.now().toString(),
      category
    } as Task);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl">
        <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h2 className="font-bold text-slate-900 text-lg">
            {initialData ? 'Edit Tugas' : 'Tambah Tugas Baru'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600"><X size={20} /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-1">Judul Tugas</label>
            <input 
              required 
              type="text" 
              value={formData.title || ''} 
              onChange={e => setFormData({...formData, title: e.target.value})} 
              className="w-full p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-600 text-slate-900 text-sm bg-white" 
              placeholder="Misal: Laporan Analisis Data" 
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-1">Deskripsi Singkat</label>
            <textarea 
              required 
              value={formData.description || ''} 
              onChange={e => setFormData({...formData, description: e.target.value})} 
              className="w-full p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-600 text-slate-900 text-sm bg-white" 
              rows={3} 
              placeholder="Penjelasan singkat tugas..." 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Platform</label>
              <select 
                value={formData.platform || 'Google Drive'} 
                onChange={e => setFormData({...formData, platform: e.target.value})} 
                className="w-full p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-600 text-slate-900 text-sm bg-white"
              >
                <option>Google Drive</option>
                <option>Figma</option>
                <option>Canva</option>
                <option>GitHub</option>
                <option>Vercel</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-1">Deadline</label>
              <input 
                required 
                type="date" 
                value={formData.deadline || ''} 
                onChange={e => setFormData({...formData, deadline: e.target.value})} 
                className="w-full p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-600 text-slate-900 text-sm bg-white" 
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-1">URL Tujuan</label>
            <input 
              required 
              type="url" 
              value={formData.url || ''} 
              onChange={e => setFormData({...formData, url: e.target.value})} 
              className="w-full p-2.5 border border-slate-300 rounded-lg outline-none focus:border-indigo-600 text-slate-900 text-sm bg-white" 
              placeholder="https://..." 
            />
          </div>
          <div className="pt-4 flex gap-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200"
            >
              Batal
            </button>
            <button 
              type="submit" 
              className="flex-1 py-2.5 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
            >
              Simpan Tugas
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}