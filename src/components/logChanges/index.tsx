import { ILog } from '@/lib/Schemas/logSchema';
import { Fetch } from '@/services/fetch';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import TableLogs from './TableLogs';

const LogChanges = async () => {
  let logs: ILog[] = [];
  try {
    const response = await Fetch(`/api/logs`, {
      next: {
        revalidate: 60,
      },
    });
    logs = response.logs;
  } catch (error) {
    console.log(error);
  }

  return (
    <div>
      <h1 className="border-b-[1px]  border-mainBlue/10 px-5 py-2 font-alt text-lg text-mainBlue">
        Ultimas Colaborações
      </h1>

      <div>
        <TableLogs logs={logs} />
      </div>
      <Link
        href={'#'}
        className=" absolute right-4 top-1 flex items-center gap-2 rounded-full p-2 text-mainBlue/80 transition-colors hover:bg-mainBlue/10"
        title="Ver mais"
      >
        <div>
          <ExternalLink className="h-5 w-5 text-mainBlue/80" />{' '}
        </div>
      </Link>
    </div>
  );
};

export default LogChanges;
