import TaskCard from '../components/TaskCard';
import Breadcrumb from '../components/Breadcrumb';
import { Task } from '../../types';

const industriTasksData: Task[] = [
  { id: '1', title: 'Pembuatan Website Portofolio', description: 'Membuat website portofolio sebagai tempat pengumpulan tugas.', platform: 'GitHub', url: 'https://github.com/Abraham-Miko/website-portofolio-ui-ux-design', deadline: '2026-09-6'},
  { id: '2', title: 'Ide Layanan Kesehatan', description: 'Menganalisa ide, permasalahan, dan pertanyaan untuk design sistem yang akan dibuat.', platform: 'Google Drive', url: 'https://drive.google.com/drive/folders/1Z0DaAqO-6NtMvF97nq1fmE9yWfG2kXNQ?usp=sharing', deadline: '2026-09-13'},
];

export default function TugasIndustri() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb Navigasi */}
      <Breadcrumb items={[{ label: 'Tugas Industri' }]} />
      
      {/* Luxurious Banner */}
      <div className="bg-zinc-950 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden drop-shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-amber-500 font-semibold tracking-widest text-sm uppercase mb-2">Tugas Industri</p>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-tight">Pengumpulan Tugas Industri</h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed capitalize">
            Kumpulan portofolio dan proyek berbasis studi kasus nyata yang dirancang untuk menjembatani dan menjawab kebutuhan teknologi dunia industri modern.
          </p>
        </div>
      </div>

      {industriTasksData.length === 0 ? (
        <div className="text-center py-20 text-zinc-400 bg-white rounded-2xl border border-dashed border-zinc-200">Belum ada data tugas yang diunggah.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriTasksData.map(task => (
             <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}