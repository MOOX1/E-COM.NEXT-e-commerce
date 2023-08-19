'use client';

import { Plus } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex flex-1 justify-between">
      <h1 className="font-alt text-xl text-mainBlue">Produtos (50)</h1>
      <div className="flex cursor-pointer items-center gap-1 rounded bg-strongBlue p-2">
        <Plus className="text-mediaBlue" />
        <p className="font-sans text-base text-mediaBlue"> Cadastrar </p>
      </div>
    </div>
  );
}
