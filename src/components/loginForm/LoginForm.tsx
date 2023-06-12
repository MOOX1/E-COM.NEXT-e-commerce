'use client';

import ButtonGoogle from './buttonGoogle/ButtonGoogle';
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
import Button from '../button/Button';

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

  const handleClickButtonGoogle = () => {
    setError(undefined);
    setIsLoading(true);
    signIn('google', { redirect: false, callbackUrl: '/signin' }).finally(() =>
      setIsLoading(false)
    );
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

          <Button label="Login" type="submit" ariaLabel="button-submit" />

          <div className="flex flex-col items-center justify-center w-full">
            <div className="h-[1px] w-full border-b-[1px] border-mainBlue mt-6 font-sans"></div>
            <p className="text-center w-min text-mainBlue font-sans px-4 -mt-[14px] bg-strongBlue">
              ou
            </p>
          </div>
          <ButtonGoogle onClick={handleClickButtonGoogle} />
        </form>
      </div>
    </div>
  );
}
