import Image from 'next/image';
import Logo from '../../assets/logo.png';
import LoginForm from '@/components/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'E.COM-NEXT',
  description: '...'
};

export default async function Signin() {
  return (
    <div className="flex h-screen w-screen">
      <div className="m-0 h-screen w-[80%] bg-[url(../assets/backgroundLogin.svg)]  bg-cover bg-center">
        <div className="absolute bottom-5">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="m-0 flex w-[20%] items-center bg-bodyColor ">
        <LoginForm />
      </div>
    </div>
  );
}
