import React from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Sidebar from '@/components/sidebar';

type Props = {};

export default function MobileSidebar({}: Props) {
  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-secondary pt-10 w-auto'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
