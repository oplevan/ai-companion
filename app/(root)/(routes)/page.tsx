import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className='text-green-500'>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
}
