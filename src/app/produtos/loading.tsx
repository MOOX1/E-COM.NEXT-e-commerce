import TableLoad from '@/components/Loads/TableLoad';

import Header from '@/components/Produtos/Header';
import Input from '@/components/atoms/Input';
import Skeleton from '@/components/atoms/Skeleton';
import { LayoutGrid, LayoutList, SearchIcon } from 'lucide-react';

export default function LoadingProducts() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-full w-full flex-col ">
      <div className="flex flex-col gap-10">
        <Header />
        <div className="flex h-full flex-1 items-baseline justify-between pb-3">
          <div className="w-80">
            <Input
              type="text"
              styleOffButton="secund"
              ariaLabel="input-search"
              icon={<SearchIcon className="text-mainBlue opacity-80" />}
            />
          </div>
          <div className="flex w-auto items-center justify-center gap-2">
            {' '}
            <p className="font-sans text-mediaBlue">Mostrar :</p>
            <div className="w-16">
              <Skeleton
                height="2rem"
                width="100%"
                quantityColumn={1}
                quantityRow={1}
              />
            </div>
            <div className="w-24">
              <Skeleton
                height="2rem"
                width="100%"
                quantityColumn={1}
                quantityRow={1}
              />
            </div>
            <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-strongBlue">
              <LayoutGrid className="text-mediaBlue opacity-80" />
            </div>
            <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-strongBlue">
              <LayoutList className="text-mediaBlue opacity-80" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full  w-full flex-[2] gap-4 overflow-auto rounded-md bg-strongBlue scrollbar-thin scrollbar-track-transparent scrollbar-thumb-mediaBlue/20 scrollbar-thumb-rounded  ">
        <div className="w-full">
          <TableLoad quantityColumns={7} quantityRow={8} circle indexCircle={0} />
        </div>
      </div>
    </div>
  );
}
