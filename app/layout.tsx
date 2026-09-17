import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import LayoutWrapper from './components/LayoutWrapper';
import './globals.css';

// 1. Inisialisasi Geist Sans dan Geist Mono dengan variabel CSS
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Platform Pengumpulan Tugas',
  description: 'Website publik pengumpulan tugas kelompok',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Tambahkan variabel font ke tag <html> atau <body>
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}