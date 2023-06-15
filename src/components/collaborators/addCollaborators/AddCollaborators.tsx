'use client';

import Input from '@/components/input/Input';
import Select from '@/components/select/Select';
import Button from '@/components/button/Button';
import Div from '@/components/motion/Div';

export default function AddCollaborators() {
  return (
    <form
      onSubmit={() => console.log('submite')}
      className="w-full h-full p-2 flex ml-5"
    >
      <div className="flex flex-col justify-evenly h-full w-3/4 ">
        <h1 className="text-mediaBlue text-lg">CADASTRAR</h1>
        <div className="flex justify-evenly gap-3 ml-2">
          <Div
            initial={{ opacity: 0, width: 0 }}
            animate={{ scale: 1, opacity: 1, width: '50%' }}
            transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
          >
            <Input type="email" placeholder="Email" />
          </Div>
          <Div
            initial={{ opacity: 0, width: 0 }}
            animate={{ scale: 1, opacity: 1, width: '50%' }}
            transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
          >
            <Select />
          </Div>
        </div>
      </div>
      <Div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 0.5, ease: 'linear', duration: 0.3 }}
        className="w-1/4 flex items-center justify-center"
      >
        <div className="w-28">
          <Button
            className="bg-mediaBlue/80 hover:bg-mediaBlue/60 font-alt text-white font-medium p-3 w-24"
            label="SALVAR"
          />
        </div>
      </Div>
    </form>
  );
}
