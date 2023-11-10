'use client';

import Table from '@/components/Table';
import { ITableProps } from '@/components/Table/types';
import { ILog } from '@/lib/Schemas/logSchema';
import { User } from 'lucide-react';
import Image from 'next/image';

interface ITableLogsProps {
  logs: ILog[];
}

const Columns: ITableProps<ILog>['columns'] = [
  {
    index: '',
    label: 'Usuário',
    render: value => {
      const colorBorder: Record<ILog['typeChange'], string> = {
        add: 'border-green-400',
        edit: 'border-yellow-400',
        remove: 'border-red-400',
        create: 'border-green-400',
      };

      return (
        <div className="flex justify-center">
          {value.author.image && (
            <>
              <Image
                src={value.author.image}
                width={36}
                height={36}
                alt="image user log"
              />
            </>
          )}
          {!value.author.image && (
            <div
              className={
                'relative flex h-9 w-9 items-center justify-center rounded-full border-2 bg-white ' +
                colorBorder[value.typeChange]
              }
            >
              <User className="h-6 w-6 text-mainBlue" />
            </div>
          )}
        </div>
      );
    },
  },
  {
    index: 'logDescription',
    label: 'Log',
    render: e => (
      <p className="overflow-hidden text-ellipsis py-2 text-center font-alt text-sm text-mainBlue/80">
        {e.logDescription}
      </p>
    ),
  },
  {
    index: 'date',
    label: 'Data',
    render: e => (
      <p className="py-2 text-center font-alt text-sm text-mainBlue/80">
        {new Date(e.date).toLocaleDateString()}
      </p>
    ),
  },
];

export default function TableLogs({ logs }: ITableLogsProps) {
  return (
    <div>
      <Table<ILog> columns={Columns} data={logs} />
    </div>
  );
}
