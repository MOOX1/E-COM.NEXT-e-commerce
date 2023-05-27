'use client';

import Image from 'next/image';
import IconGoogle from '../../assets/iconGoogle.svg';
import { signIn } from 'next-auth/react';
import { FormEvent, useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState<string>();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(email);
    signIn('credentials');
  };

  return (
    <div className="relative group">
      <div className=" absolute w-[450px] transition-colors h-[390px] rounded-3xl group-focus-within:bg-mainBlue group-hover:bg-mainBlue left-[50%] top-[50%] -ml-[225px] -mt-[195px]  blur-sm "></div>
      <div className="bg-[#202023] relative w-[450px] h-[390px] duration-100 z-10  rounded-3xl flex flex-col  p-14">
        <div className="mb-11">
          <p className="font-alt text-mainBlue w-full text-center text-3xl">
            E-COM.NEXT ADMIN
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="focus-visible:outline-0 mb-5 bg-transparent border-b-[1px] border-mainBlue w-full placeholder:text-mainBlue py-1 placeholder:font-alt placeholder:opacity-50 placeholder:text-xs text-white font-sans text-xs"
            placeholder="E-mail"
            type="email"
          />

          <button
            type="submit"
            className="bg-mainBlue text-black rounded transition-colors hover:bg-blue-200 p-1 min-w-[200px] w-min font-sans mb-2"
          >
            {' '}
            Login{' '}
          </button>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="h-[1px] w-full border-b-[1px] border-mainBlue mt-6 font-sans"></div>
            <p className="text-center w-min text-mainBlue px-4 -mt-[14px] bg-[#202023]">
              ou
            </p>
          </div>
          <div
            onClick={() => signIn('google')}
            className="min-w-[230px] p-1 cursor-pointer h-auto bg-mainBlue rounded-3xl mt-7 flex items-center"
          >
            <Image src={IconGoogle} width={40} height={41} alt="" />
            <p className="text-black font-sans text-center text-xs w-full font-normal pr-5">
              login com google
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
