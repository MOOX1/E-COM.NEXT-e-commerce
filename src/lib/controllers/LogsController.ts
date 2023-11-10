import { IResponseDefault } from '@/types/admins';

import database from '../database/mongodb';
import { ILog } from '../Schemas/logSchema';
import Logs from '../Schemas/logSchema';

database.connect();

export const CreateLog = async (): Promise<ILog[] | null | IResponseDefault> => {
  const log = await Logs.create({
    date: new Date(),
    typeChange: 'add',
    author: {
      email: 'vitormeneses87@gmail.com',
      image: null,
    },
    logDescription: 'delete product',
  });

  log.save();

  console.log(log);

  return {
    message: 'success',
    status: 200,
  };
};

export const FindAllLogs = async (): Promise<ILog[] | IResponseDefault> => {
  const logs: ILog[] = await Logs.find().lean();

  if (!logs) {
    return {
      status: 404,
      message: 'Produtos não encontrados',
    };
  }

  return logs;
};
