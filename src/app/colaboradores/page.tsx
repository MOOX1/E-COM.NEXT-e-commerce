import { Metadata } from 'next';
import { Edit, Trash } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

export const runtime = 'edge';

export default function Colaboradores() {
  return (
    <div className="flex gap-5 w-full h-full">
      <div className="w-2/3 h-full flex flex-col gap-5">
        <div className="w-full bg-strongBlue rounded-lg h-1/2 p-3 pl-14">
          <div className="flex justify-end gap-2">
            <Edit className="text-mainBlue  w-5 h-auto" />
            <Trash className="text-mainBlue w-5 h-auto" />
          </div>
          <div className="w-full h-[90%] flex items-center gap-6">
            <div className="h-32 w-32 rounded-full bg bg-white"></div>
            <div className="font-alt text-white flex flex-col gap-1">
              <p className="font-semibold font-alt text-lg uppercase">
                Admin Super
              </p>
              <p className="px-2 py-1 bg-mainBlue font-semibold w-min whitespace-nowrap rounded text-base">
                Vitor Meneses
              </p>
              <p className="text-mainBlue underline text-base opacity-80">
                emailexemplo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="w-full bg-strongBlue rounded-lg h-1/6"></div>
        <div className="w-full bg-strongBlue rounded-lg h-2/5"></div>
      </div>
      <div className="w-4/12 h-full bg-strongBlue rounded-lg shadow-black border-mainBlue border-[1px]"></div>
    </div>
  );
}
