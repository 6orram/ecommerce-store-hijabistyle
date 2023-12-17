// MobileSidebar.tsx

import { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MobileSidebarProps {
  data: Category[];
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between">
        <RiMenuLine
          className="text-pink-500 cursor-pointer mr-4"
          size={24}
          onClick={() => setIsOpen(true)}
        />

        {/* Add your cart button here */}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute inset-y-0 right-0 w-64 bg-white z-50">
            <div className="flex items-center justify-end p-4">
              <RiCloseLine
                className="text-pink-500 cursor-pointer"
                size={24}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="flex flex-col space-y-4 p-4">
              {data.map((route) => (
                <Link
                  key={route.id}
                  href={`/category/${route.id}`}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-pink-500',
                    route.active ? 'text-black' : 'text-neutral-500'
                  )}
                  onClick={() => setIsOpen(false)} // Close sidebar on link click
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSidebar;
