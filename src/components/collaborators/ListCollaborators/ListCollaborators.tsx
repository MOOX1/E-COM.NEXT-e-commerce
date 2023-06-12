'use client';

import React, { Suspense, useState } from 'react';
import { Search } from 'lucide-react';
import Table from '../../table/Table';
import { TableProps } from '../../table/types';
import Input from '../../input/Input';
import Load from '../../load/Load';

interface Collaborators {
  admins: TableProps;
  onChange?: string;
}

export default function ListCollaborators({ admins, onChange }: Collaborators) {
  const [filteredAdmins, setFilteredAdmins] = useState(admins);

  const handleFilter = (event: string) => {
    const filteredData = admins.data.filter((admin) => {
      return admin.name.toLowerCase().includes(event.toLowerCase());
    });
    setFilteredAdmins({
      ...admins,
      data: filteredData
    });
  };

  return (
    <>
      <div className="w-full px-14 flex justify-center items-center p-2 border-mainBlue/10 border-b">
        <Input
          type="text"
          styleOffButton="secund"
          onChange={handleFilter}
          icon={<Search className="text-mainBlue/80" />}
        />
      </div>
      <Suspense fallback={<Load />}>
        <Table columns={admins.columns} data={filteredAdmins.data} />
      </Suspense>
    </>
  );
}
