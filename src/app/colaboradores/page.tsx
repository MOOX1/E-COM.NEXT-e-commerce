import { Metadata } from 'next';
import Profile from '../../components/profileAccount/Profile';
import LogChanges from '../../components/logChanges/LogChanges';

export const metadata: Metadata = {
  title: 'Colaboradores',
  description: '...'
};

export const runtime = 'edge';

export default function Colaboradores() {
  return (
    <div className="flex gap-3 w-full h-full">
      <div className="w-2/3 h-full flex flex-col gap-3">
        <div className="w-full rounded-lg h-1/2 flex flex-row-reverse gap-3">
          <LogChanges />
          <Profile />
        </div>
        <div className="w-full bg-strongBlue rounded-lg h-1/6"></div>
        <div className="w-full bg-strongBlue rounded-lg h-2/5"></div>
      </div>
      <div className="w-4/12 h-full bg-strongBlue rounded-lg shadow-black border-mainBlue border-[1px]"></div>
    </div>
  );
}
