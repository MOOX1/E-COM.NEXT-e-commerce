import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Logs } from './types';
import List from './list/List';
import Div from '../motion/Div';
import { Fetch } from '@/services/fetch';
import { Suspense } from 'react';
import Load from '../load/Load';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren'
    }
  }
};

const LogChanges = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  let logs: Logs[] = [];
  try {
    const response = await Fetch(`/api/logs`, {
      next: {
        revalidate: 60
      }
    });
    logs = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <h1 className="text-mainBlue  text-lg font-alt border-b-[1px] py-2 px-5 border-mainBlue/10">
        Ultimas Colaborações:
      </h1>
      <div className="text-white flex justify-between px-5 w-full font-alt border-b-[1px] border-mainBlue/10">
        <p className=" text-mainBlue/80 py-2  text-center">Usuário</p>
        <p className=" text-mainBlue/80 py-2 text-center">Log</p>
        <p className=" text-mainBlue/80 py-2 text-center">Data</p>
      </div>
      <Suspense fallback={<Load />}>
        <Div initial="hidden" animate="visible" variants={list}>
          {logs?.map((item, index) => {
            if (index > 2) return;

            return <List key={item.autor.id} {...item} />;
          })}
        </Div>
      </Suspense>
      <Link
        href={'#'}
        className=" text-mainBlue/80 absolute flex right-4 top-1 gap-2 hover:bg-mainBlue/10 transition-colors rounded-full p-2 items-center"
        title="Ver mais"
      >
        <div>
          <ExternalLink className="text-mainBlue/80 w-5 h-5" />{' '}
        </div>
      </Link>
    </>
  );
};

export default LogChanges;
