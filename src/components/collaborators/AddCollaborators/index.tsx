'use client';

import Input from '@/components/atoms/Input';
import Select from '@/components/atoms/Select';
import Button from '@/components/atoms/Button';
import Div from '@/components/atoms/Div';
import * as zod from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Control, UseFormReturn, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

import { Toast } from '@/components/atoms/Toast';
import { useAdmins } from '@/hooks/admins';

type TFormValues = {
  Nome: string;
};

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  levelAccess: z.string().min(1, 'Campo Obrigatório')
});

type TFormDataProps = z.infer<typeof schema>;

export default function AddCollaborators() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset
  } = useForm<TFormDataProps>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    resolver: zod.zodResolver(schema),
    defaultValues: {
      email: '',
      levelAccess: ''
    }
  });

  const onSubmit = (data: TFormDataProps) => {
    reset({ email: '' });
    fetch('/api/all-admins/create-admin', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((data) => data.json())
      .then((response) => {
        if (response?.message) {
          return Toast({ message: response.message, type: 'error' });
        }

        useAdmins.setState((state) => ({
          state: {
            admins: {
              ...state.state.admins,
              data: [...state.state.admins.data, response]
            }
          }
        }));

        return Toast({
          message: 'Usuário criado com sucesso',
          type: 'success'
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ml-5 flex h-full w-full p-2"
    >
      <div className="flex h-full w-3/4 flex-col justify-evenly ">
        <h1 className="text-lg text-mediaBlue">CADASTRAR</h1>
        <div className="ml-2 flex justify-evenly gap-3">
          <Div
            initial={{ opacity: 0, width: 0 }}
            animate={{ scale: 1, opacity: 1, width: '50%' }}
            transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
          >
            <Input
              useFormRegister={
                register('email', {
                  required: true
                }) as unknown as UseFormReturn['register']
              }
              errors={errors.email?.message}
              type="email"
              placeholder="Email"
              ariaLabel="Email"
            />
          </Div>
          <Div
            initial={{ opacity: 0, width: 0 }}
            animate={{ scale: 1, opacity: 1, width: '50%' }}
            transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
          >
            <Select
              controlForm={{
                control: control as unknown as Control<TFormValues>,
                name: 'levelAccess' as 'Nome',
                defaultValue: '',
                rules: { required: true }
              }}
              error={errors.levelAccess?.message}
            />
          </Div>
        </div>
      </div>
      <Div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
        className="flex w-1/4 items-center justify-center"
      >
        <div className="w-28">
          <Button
            className="w-24 bg-mediaBlue/80 p-3 font-alt font-medium text-white hover:bg-mediaBlue/60"
            label={'SALVAR'}
          />
        </div>
      </Div>
    </form>
  );
}
