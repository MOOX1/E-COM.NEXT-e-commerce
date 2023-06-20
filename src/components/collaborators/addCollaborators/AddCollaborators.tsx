'use client';

import Input from '@/components/input/Input';
import Select from '@/components/select/Select';
import Button from '@/components/button/Button';
import Div from '@/components/motion/Div';
import * as zod from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Control, UseFormReturn, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Toast, { ToastType } from '@/components/toast/Toast';
import Load from '@/components/load/Load';

type FormValues = {
  Nome: string;
};

const schema = z.object({
  email: z.string().email('Informe um email válido'),
  levelAccess: z.string().min(1, 'Campo Obrigatorio')
});

type FormDataProps = z.infer<typeof schema>;

export default function AddCollaborators() {
  const [messageToast, setMessageToast] = useState<string | undefined>(
    undefined
  );
  const [typeToast, setTypeToast] = useState<ToastType | undefined>(undefined);

  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
    reset
  } = useForm<FormDataProps>({
    mode: 'onSubmit',
    criteriaMode: 'firstError',
    resolver: zod.zodResolver(schema),
    defaultValues: {
      email: '',
      levelAccess: ''
    }
  });

  const onSubmit = (data: FormDataProps) => {
    fetch('/api/all-admins/create-admin', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((data) => data.json())
      .then((response) => {
        if (response?.message) {
          setTypeToast('error');
          return setMessageToast(response.message);
        }
        setTypeToast('success');
        return setMessageToast('Cadastrado com sucesso');
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ml-5 flex h-full w-full p-2"
    >
      <Toast
        message={messageToast}
        type={typeToast}
        onClose={() => {
          reset();
          setMessageToast(undefined);
        }}
      />
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
            />
          </Div>
          <Div
            initial={{ opacity: 0, width: 0 }}
            animate={{ scale: 1, opacity: 1, width: '50%' }}
            transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
          >
            <Select
              controlForm={{
                control: control as unknown as Control<FormValues>,
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
