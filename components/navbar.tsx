'use client';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Menu, Sparkles } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const font = Poppins({ weight: '600', subsets: ['latin'] });

export default function Navbar() {
  return (
    <div className='fixed z-50 w-full flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary'>
      <Menu className='block md:hidden' />
      <Link href='/'>
        <h1 className={cn('hidden md:block text-xl md:text-2xl font-bold text-primary', font.className)}>companion.ai</h1>
      </Link>
      <div className='flex items-center gap-x-3'>
        <Button variant='premium' size='sm'>
          Upgrade <Sparkles className='h-4 w-4 ml-2' />
        </Button>
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}
