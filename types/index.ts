export interface Task {
  id: string;
  title: string;
  description: string;
  platform: string;
  url: string;
  deadline: string;
  category: 'industri' | 'pendidikan';
}

export interface Member {
  id: string;
  name: string;
  nim: string;
  role: string;
  prodi: string;
  social: string;
}