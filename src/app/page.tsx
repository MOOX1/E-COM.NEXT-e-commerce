import { getServerSession } from 'next-auth';
import { authOption } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import ButtonSignOut from '@/components/buttonSignOut/buttonSignOut';

export default async function Home() {
  const session = await getServerSession(authOption);

  if (!session) redirect('/signin');
  return (
    <div>
      <h1>home</h1>
      <ButtonSignOut />
    </div>
  );
}
