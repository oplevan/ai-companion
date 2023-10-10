import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Companion, Message } from '@prisma/client';

interface BotAvatarProps {
  src: string;
}
export default function BotAvatar({ src }: BotAvatarProps) {
  return (
    <Avatar className='w-12 h-12 border-2 border-primary/10'>
      <AvatarImage src={src} />
    </Avatar>
  );
}
