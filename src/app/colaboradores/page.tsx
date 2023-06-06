import { Metadata } from 'next';
import Profile from '../../components/profileAccount/Profile';
import LogChanges from '../../components/logChanges/LogChanges';
import Table from '@/components/table/Table';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

export default function Colaboradores() {
  return (
    <div className="flex gap-3 w-full h-full">
      <div className="w-2/3 h-full flex flex-col gap-3">
        <div className="w-full rounded-lg h-1/2 flex flex-row-reverse gap-3">
          <LogChanges />
          <Profile />
        </div>
        <div className="w-full bg-strongBlue rounded-lg h-1/6  shadow-main"></div>
        <div className="w-full bg-strongBlue rounded-lg h-2/5  shadow-main"></div>
      </div>
      <div className="w-4/12 h-full bg-strongBlue rounded-lg   shadow-main ">
        <Table />
      </div>
    </div>
  );
}
