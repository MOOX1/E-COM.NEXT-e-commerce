import Image from 'next/image';
import Logo from '../../assets/logo.png';
import LoginForm from '@/components/loginForm/LoginForm';

export default function Login() {
  return (
    <div className="h-screen w-screen flex">
      <div className="bg-[url(../assets/backgroundLogin.svg)] w-[50%] bg-cover">
        <div className="absolute bottom-5">
          <Image src={Logo} alt="logo" />
        </div>
      </div>
      <div className="bg-[#141416] w-[50%] flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
