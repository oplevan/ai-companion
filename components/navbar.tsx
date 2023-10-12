'use client';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { Menu, Sparkles } from 'lucide-react';
import { Poppins } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import MobileSidebar from '@/components/mobile-sidebar';
import { useProModal } from '@/hooks/use-pro-modal';

const font = Poppins({ weight: '600', subsets: ['latin'] });

interface NavbarProps {
  userIsSubscribed: boolean;
}

export default function Navbar({ userIsSubscribed }: NavbarProps) {
  const proModal = useProModal();
  return (
    <div className='fixed z-50 w-full flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16'>
      <MobileSidebar userIsSubscribed={userIsSubscribed} />
      <Link href='/'>
        <h1 className={cn('hidden md:block text-xl md:text-2xl font-bold text-primary', font.className)}>companion.ai</h1>
      </Link>
      <div className='flex items-center gap-x-3'>
        {!userIsSubscribed && (
          <Button variant='premium' size='sm' onClick={proModal.onOpen}>
            Upgrade <Sparkles className='h-4 w-4 ml-2' />
          </Button>
        )}
        <ModeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}
