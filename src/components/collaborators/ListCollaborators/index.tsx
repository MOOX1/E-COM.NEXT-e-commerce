'use client';

import React, { Suspense, useState } from 'react';
import { Search } from 'lucide-react';
import Table from '../../Table';
import { TableProps } from '../../Table/types';
import Input from '../../Input';
import Load from '../../Load';
import ModalListAdmins from '../ModalListAdmins';

import { AdminInDataBase } from '@/types/admins';
import Toast, { ToastType } from '@/components/Toast';

interface Collaborators {
  admins: TableProps;
  onChange?: string;
}

export default function ListCollaborators({ admins }: Collaborators) {
  const [filteredAdmins, setFilteredAdmins] = useState(admins);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [adminSelected, setAdminSelected] = useState<
    AdminInDataBase | undefined
  >(undefined);
  const [messageToast, setMessageToast] = useState<string | undefined>(
    undefined
  );
  const [typeToast, setTypeToast] = useState<ToastType | undefined>(undefined);

  const handleFilter = (event: string) => {
    const filteredData = admins.data.filter((admin) => {
      return admin.email.toLowerCase().includes(event.toLowerCase());
    });
    setFilteredAdmins({
      ...admins,
      data: filteredData
    });
  };

  const handleIsOpenModal = (data?: AdminInDataBase) => {
    if (!data) return setIsVisible(!isVisible);
    setAdminSelected(data);
    setIsVisible(!isVisible);
  };

  const handleDeleteAdmin = (id: string) => {
    setIsVisible(false);
    fetch(`/api/all-admins/delete/${id}`, {
      method: 'DELETE'
    })
      .then((data) => data.json())
      .then((response) => {
        if (response?.message) {
          setTypeToast('info');
          setMessageToast(response.message);
        }

        setTypeToast('success');
        setMessageToast('Admin excluido com sucesso');
      });
  };

  return (
    <>
      <ModalListAdmins
        handleDeleteAdmin={handleDeleteAdmin}
        handleIsOpenModal={() => handleIsOpenModal()}
        isVisible={isVisible}
        adminSelected={adminSelected}
      />
      <Toast message={messageToast} type={typeToast} />
      <div className="flex w-full items-center justify-center border-b border-mainBlue/10 p-2 px-14">
        <Input
          type="text"
          styleOffButton="secund"
          onChange={handleFilter}
          icon={<Search className="text-mainBlue/80" />}
        />
      </div>
      <Suspense fallback={<Load />}>
        <Table
          columns={admins.columns}
          data={filteredAdmins.data}
          onClick={handleIsOpenModal}
        />
      </Suspense>
    </>
  );
}
