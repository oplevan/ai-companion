import { useUser } from '@clerk/nextjs';

import { Avatar, AvatarImage } from '@/components/ui/avatar';

export default function UserAvatar() {
  const { user } = useUser();
  return (
    <Avatar className='w-12 h-12'>
      <AvatarImage src={user?.imageUrl} />
    </Avatar>
  );
}
