"use client";

import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskModal from '../components/TaskModal';
import { Task } from '../../types';
import { Plus } from 'lucide-react';

const STORAGE_KEY = 'group_tasks_data';

const initialMockTasks: Task[] = [
  { id: '201', title: 'Laporan Evaluasi RPP', description: 'Analisis dan evaluasi Rencana Pelaksanaan Pembelajaran kurikulum Merdeka.', platform: 'Google Drive', url: '#', deadline: '2026-11-01', category: 'pendidikan' },
  { id: '202', title: 'Media Pembelajaran Interaktif', description: 'Membuat slide edukasi interaktif tentang jaringan komputer dasar.', platform: 'Canva', url: '#', deadline: '2026-11-10', category: 'pendidikan' },
];

export default function TugasPendidikan() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  useEffect(() => {
    setIsClient(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setTasks(JSON.parse(stored));
    } else {
      const allMocks: Task[] = [
        { id: '101', title: 'Riset Pasar UMKM', description: 'Melakukan analisis SWOT untuk UMKM.', platform: 'Google Drive', url: '#', deadline: '2026-10-15', category: 'industri' },
        ...initialMockTasks
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allMocks));
      setTasks(allMocks);
    }
  }, []);

  const handleSave = (task: Task) => {
    const updatedTasks = editingTask ? tasks.map(t => t.id === task.id ? task : t) : [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  const handleDelete = (id: string) => {
    if(confirm('Yakin ingin menghapus tugas ini?')) {
      const updatedTasks = tasks.filter(t => t.id !== id);
      setTasks(updatedTasks);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
    }
  };

  const pendidikanTasks = tasks.filter(t => t.category === 'pendidikan');

  if (!isClient) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-slate-600">Daftar pengumpulan tugas terkait metode dan media pendidikan.</p>
        <button onClick={() => { setEditingTask(null); setIsModalOpen(true); }} className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2.5 rounded-lg hover:bg-indigo-700 text-sm font-medium transition-colors">
          <Plus size={18} /> Tambah Tugas
        </button>
      </div>

      {pendidikanTasks.length === 0 ? (
        <div className="text-center py-20 text-slate-400 bg-white rounded-xl border border-dashed border-slate-300">Belum ada tugas pendidikan.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pendidikanTasks.map(task => (
             <TaskCard key={task.id} task={task} onEdit={(t) => { setEditingTask(t); setIsModalOpen(true); }} onDelete={handleDelete} />
          ))}
        </div>
      )}

      <TaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} initialData={editingTask} category="pendidikan" />
    </div>
  );
}