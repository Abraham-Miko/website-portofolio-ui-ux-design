import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutWrapper from './components/LayoutWrapper';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Platform Pengumpulan Tugas',
  description: 'Website publik pengumpulan tugas kelompok',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}