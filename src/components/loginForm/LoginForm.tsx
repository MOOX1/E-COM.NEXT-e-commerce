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
    <div className="group relative -ml-[300px]">
      <div className=" absolute left-[50%] top-[50%] -ml-[225px] -mt-[250px] h-[500px] w-[450px] rounded-3xl blur-sm transition-colors group-focus-within:bg-mainBlue  group-hover:bg-mainBlue "></div>
      <div className="relative z-10 flex h-[500px] w-[450px] flex-col items-center justify-center  rounded-3xl bg-strongBlue p-14  duration-100">
        <div className="mb-11">
          <p className="w-full text-center font-alt text-3xl text-mainBlue">
            E-COM.NEXT ADMIN
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center justify-center"
        >
          {error && (
            <span className="-mt-6 flex flex-col items-center justify-center px-2 pb-6 text-center font-sans text-sm text-red-600">
              {error == 'AccessDenied' ? 'Seu acesso foi negado' : error}
            </span>
          )}
          {isLoading && <Load />}
          <div className="mb-5 w-full">
            <Input
              useFormRegister={
                register('email') as unknown as UseFormReturn['register']
              }
              ariaLabel="E-mail"
              placeholder="E-mail"
              type="email"
            />
          </div>
          {errors.email && (
            <p className="-mt-4 w-full py-1 text-left font-sans text-xs text-red-500">
              {errors.email.message}
            </p>
          )}

          <div className="w-3/6">
            <Button label="Login" type="submit" ariaLabel="button-submit" />
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="mt-6 h-[1px] w-full border-b-[1px] border-mainBlue font-sans"></div>
            <p className="-mt-[14px] w-min bg-strongBlue px-4 text-center font-sans text-mainBlue">
              ou
            </p>
          </div>
          <ButtonGoogle onClick={handleClickButtonGoogle} />
        </form>
      </div>
    </div>
  );
}
