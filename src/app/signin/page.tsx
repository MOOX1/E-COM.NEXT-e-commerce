import Image from 'next/image';
import Logo from '../../assets/logo.png';
import LoginForm from '@/components/loginForm/LoginForm';
import { getServerSession } from 'next-auth';
import { authOption } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Signin() {
  const session = await getServerSession(authOption);

  if (session) redirect('/');

  return (
    <div className="h-screen w-screen flex">
      <div className="bg-[url(../assets/backgroundLogin.svg)] m-0 bg-center h-screen  w-[80%] bg-cover">
        <div className="absolute bottom-5">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="bg-[#141416] w-[20%] m-0 flex items-center ">
        <LoginForm />
      </div>
    </div>
  );
}
