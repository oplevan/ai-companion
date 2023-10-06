import Image from 'next/image';
import { Companion } from '@prisma/client';

import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

interface CompanionsProps {
  data: (Companion & { _count: { messages: number } })[];
}

export default function Companions({ data }: CompanionsProps) {
  if (data.length === 0)
    return (
      <div className='pt-10 flex flex-col items-center justify-center'>
        <div className='relative w-60 aspect-square'>
          <Image fill className='greyscale' alt='empty' src='/empty.png' />
        </div>
        <p className='text-sm text-muted-foreground'>No companions found.</p>
      </div>
    );
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 pb-10'>
      {data.map((item) => (
        <Card key={item.id} className='bg-primary/10 rounded-xl cursor-pointer hover:opacity-75 transition border-0'>
          <Link href={`/chat/${item.id}`}>
            <CardHeader className='flex items-center justify-center text-center text-muted-foreground'>
              <div className='relative w-32 aspect-square'>
                <Image fill src={item.src} alt={`${item.name} companion`} className='rounded-xl object-cover' />
              </div>
              <h3 className='font-bold'>{item.name}</h3>
              <p className='text-xs'>{item.description}</p>
            </CardHeader>
            <CardFooter className='flex items-center justify-between text-xs text-muted-foreground'>
              <p className='lowercase'>@{item.userName}</p>
              <div className='flex items-center'>
                <MessageSquare className='aspect-square w-3 mr-1' />
                {item._count.messages}
              </div>
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
}
