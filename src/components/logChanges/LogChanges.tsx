import { ExternalLink } from 'lucide-react';
import { User } from 'next-auth';
import Link from 'next/link';

type LogsType = 'delete' | 'edit' | 'add';

interface Logs {
  type: LogsType;
  description: string;
  autor: User;
  titulo: string;
  date: Date;
}

const logs: Logs[] = [
  {
    type: 'add',
    autor: {
      id: 'oivnoxinvsdno',
      levelAccess: 'admin super',
      email: 'vitormeneses87@gmail.com',
      image: '',
      name: 'Vitor Meneses'
    },
    titulo: 'Cadastrou produto',
    description: 'Cadastrou o produto pão de forma',
    date: new Date()
  },
  {
    type: 'edit',
    autor: {
      id: 'oivnoxcslkinvsdno',
      levelAccess: 'admin super',
      email: 'vitormeneses87@gmail.com',
      image: '',
      name: 'Vitor Meneses'
    },
    titulo: 'Editou produto',
    description: 'Editou o produto pão de forma',
    date: new Date()
  },
  {
    type: 'delete',
    autor: {
      id: 'oivnolk\vlxinvsdno',
      levelAccess: 'admin super',
      email: 'vitormeneses87@gmail.com',
      image: '',
      name: 'Vitor Meneses'
    },
    titulo: 'Deletou produto',
    description: 'Deletou o produto pão de forma',
    date: new Date()
  }
];

export default function LogChanges() {
  return (
    <div className="w-2/4 h-full relative bg-strongBlue rounded-lg shadow-main">
      <h1 className="text-mainBlue  text-lg font-alt border-b-[1px] py-2 px-5 border-mainBlue/10">
        Ultimas Colaborações:
      </h1>
      <div className="text-white flex justify-between px-5 w-full font-alt border-b-[1px] border-mainBlue/10">
        <p className=" text-mainBlue/80 py-2  text-center">Usuário</p>
        <p className=" text-mainBlue/80 py-2 text-center">Log</p>
        <p className=" text-mainBlue/80 py-2 text-center">Data</p>
      </div>
      {logs.map((item, index) => {
        if (index > 2) return;
        const colorBorder = {
          add: 'border-green-400',
          edit: 'border-yellow-400',
          delete: 'border-red-400'
        }[item.type];
        return (
          <>
            <div
              key={item.autor.id}
              className="py-2 flex  gap-2 items-center justify-between px-5 cursor-pointer border-b-[1px] transition-colors border-mainBlue/10 hover:bg-mediaBlue/10"
            >
              <div
                className={
                  'h-9 w-9 bg-white relative rounded-full border-2 ' +
                  colorBorder
                }
              ></div>
              <div className="w-3/5">
                <p className="text-mainBlue/80"> {item.titulo} </p>
                <p className=" whitespace-nowrap overflow-hidden text-sm text-white text-ellipsis">
                  {item.description}
                </p>
              </div>
              <p className="text-white text-right text-xs">
                {' '}
                {item.date.toLocaleDateString(undefined, {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit'
                })}
              </p>
            </div>
          </>
        );
      })}

      <Link
        href={'#'}
        className=" text-mainBlue/80 absolute flex right-4 top-1 gap-2 hover:bg-mainBlue/10 transition-colors rounded-full p-2 items-center"
        title="Ver mais"
      >
        <div>
          <ExternalLink className="text-mainBlue/80 w-5 h-5" />{' '}
        </div>
      </Link>
    </div>
  );
}
