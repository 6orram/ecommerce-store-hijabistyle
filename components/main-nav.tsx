'use client'

// main-nav.tsx

import { usePathname } from 'next/navigation';
import MobileSidebar from './MobileSidebar';
import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  return (
    <nav className="mx-4 lg:mx-0 flex items-center lg:space-x-6">
      <MobileSidebar data={data} />

      {/* Navigation links (visible on larger screens) */}
      <div className="hidden lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
        {data.map((route) => (
          <Link
            key={route.id}
            href={`/category/${route.id}`}
            className={cn(
              'text-sm font-medium transition-colors hover:text-pink-500',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
