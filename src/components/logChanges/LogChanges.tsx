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
      <h1 className="border-b-[1px]  border-mainBlue/10 px-5 py-2 font-alt text-lg text-mainBlue">
        Ultimas Colaborações:
      </h1>
      <div className="flex w-full justify-between border-b-[1px] border-mainBlue/10 px-5 font-alt text-white">
        <p className=" py-2 text-center  text-mainBlue/80">Usuário</p>
        <p className=" py-2 text-center text-mainBlue/80">Log</p>
        <p className=" py-2 text-center text-mainBlue/80">Data</p>
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
        className=" absolute right-4 top-1 flex items-center gap-2 rounded-full p-2 text-mainBlue/80 transition-colors hover:bg-mainBlue/10"
        title="Ver mais"
      >
        <div>
          <ExternalLink className="h-5 w-5 text-mainBlue/80" />{' '}
        </div>
      </Link>
    </>
  );
};

export default LogChanges;
