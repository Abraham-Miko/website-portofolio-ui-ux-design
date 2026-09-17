import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-xs md:text-sm text-zinc-400 mb-10 font-medium tracking-wide">
      {/* Home selalu mengarah ke halaman Welcome */}
      <Link 
        href="/" 
        className="flex items-center gap-2 hover:text-amber-500 transition-colors"
      >
        <Home size={14} />
        <span>Welcome</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight size={14} className="text-zinc-600" />
            {isLast ? (
              <span className="text-zinc-700 font-semibold">{item.label}</span>
            ) : (
              <Link href={item.href || '#'} className="hover:text-amber-500 transition-colors">
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}