import Image from 'next/image';
import Logo from '../../assets/logo.png';
import LoginForm from '@/components/loginForm/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E.COM-NEXT',
  description: '...'
};

export default async function Signin() {
  return (
    <div className="h-screen w-screen flex">
      <div className="bg-[url(../assets/backgroundLogin.svg)] m-0 bg-center h-screen  w-[80%] bg-cover">
        <div className="absolute bottom-5">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="bg-bodyColor w-[20%] m-0 flex items-center ">
        <LoginForm />
      </div>
    </div>
  );
}
