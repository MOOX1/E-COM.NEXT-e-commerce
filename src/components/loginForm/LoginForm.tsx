'use client';

import Image from 'next/image';
import IconGoogle from '../../assets/iconGoogle.svg';
import { signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UseFormReturn, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import cookies from 'js-cookie';
import Load from '../load/Load';
import { useSearchParams } from 'next/navigation';
import Input from '../input/Input';

const schema = z.object({
  email: z.string().email('Informe um email válido')
});

type FormDataProps = z.infer<typeof schema>;

export default function LoginForm() {
  const [error, setError] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>();
  const router = useRouter();
  const error_rate_limit: string | undefined = cookies.get('error-rate-limit');
  const errorParams = useSearchParams().get('error');

  useEffect(() => {
    if (!errorParams) return;
    setError(errorParams);
  }, [errorParams]);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormDataProps>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    resolver: zodResolver(schema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = (data: FormDataProps) => {
    console.log(data);
    setIsLoading(true);
    setError(undefined);
    cookies.remove('error-rate-limit');
    signIn('email', {
      email: data.email,
      redirect: false
    }).then((data) => {
      setIsLoading(false);
      if (!data?.error) {
        router.push(data?.url as string);
        cookies.remove('error-rate-limit');
      }
      if (error_rate_limit?.length) {
        return setError(error_rate_limit);
      }
      if (data?.error) {
        setError(data?.error);
      }
    });
  };

  return (
    <div className="relative group -ml-[300px]">
      <div className=" absolute w-[450px] transition-colors h-[500px] rounded-3xl group-focus-within:bg-mainBlue group-hover:bg-mainBlue left-[50%] top-[50%] -ml-[225px] -mt-[250px]  blur-sm "></div>
      <div className="bg-strongBlue items-center justify-center relative w-[450px] h-[500px] duration-100 z-10  rounded-3xl flex flex-col  p-14">
        <div className="mb-11">
          <p className="font-alt text-mainBlue w-full text-center text-3xl">
            E-COM.NEXT ADMIN
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center justify-center"
        >
          {error && (
            <span className="text-red-600 flex text-center px-2 font-sans text-sm flex-col -mt-6 pb-6 items-center justify-center">
              {error == 'AccessDenied' ? 'Seu acesso foi negado' : error}
            </span>
          )}
          {isLoading && <Load />}
          <Input
            useFormRegister={
              register('email') as unknown as UseFormReturn['register']
            }
            ariaLabel="E-mail"
            placeholder="E-mail"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 w-full -mt-4 text-left text-xs py-1 font-sans">
              {errors.email.message}
            </p>
          )}

          <button
            type="submit"
            className="bg-mainBlue text-black rounded transition-colors hover:bg-blue-200 p-1 min-w-[200px] w-min font-sans mb-2"
            aria-label="buttom-submit"
          >
            {' '}
            Login{' '}
          </button>

          <div className="flex flex-col items-center justify-center w-full">
            <div className="h-[1px] w-full border-b-[1px] border-mainBlue mt-6 font-sans"></div>
            <p className="text-center w-min text-mainBlue font-sans px-4 -mt-[14px] bg-strongBlue">
              ou
            </p>
          </div>
          <div
            onClick={() => {
              setError(undefined);
              signIn('google', { redirect: false, callbackUrl: '/signin' });
            }}
            aria-label="buttom-google"
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
