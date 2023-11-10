'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import Table from '@/components/Table';
import Input from '../../atoms/Input';
import Load from '../../atoms/Load';
import ModalListAdmins from '../ModalListAdmins';

import { IAdminInDataBase } from '@/types/admins';
import { Toast } from '@/components/atoms/Toast';
import { useAdmins } from '@/hooks/admins';
import { ITableProps } from '@/components/Table/types';
import ImageUser from '@/components/Table/ItemsTable/ImageUser';

const columns: ITableProps<IAdminInDataBase>['columns'] = [
  {
    index: 'image',
    label: ' Usuário',
    width: '6',
    render: values => {
      return <ImageUser keyValue={values._id} image={values.image} />;
    },
  },
  {
    index: 'name',
    label: 'Name',
  },
  {
    index: 'email',
    label: 'Email',
  },
  {
    index: 'levelAccess',
    label: 'Role',
  },
];

export default function ListCollaborators() {
  const admins = useAdmins<IAdminInDataBase[]>(state => state.state.admins);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filteredAdmins, setFilteredAdmins] = useState(admins);
  const [adminSelected, setAdminSelected] = useState<IAdminInDataBase | undefined>(
    undefined,
  );

  const handleFilter = (event: string) => {
    const filteredData = admins.filter(admin => {
      return admin.email.toLowerCase().includes(event.toLowerCase());
    });

    setFilteredAdmins({
      ...admins,
      ...filteredData,
    });
  };

  const handleIsOpenModal = (data?: IAdminInDataBase) => {
    if (!data) return setIsVisible(!isVisible);
    setAdminSelected(data);
    setIsVisible(!isVisible);
  };

  const handleDeleteAdmin = (id: string) => {
    setIsVisible(false);
    fetch(`/api/all-admins/delete/${id}`, {
      method: 'DELETE',
    })
      .then(data => data.json())
      .then(response => {
        if (response?.message) {
          return Toast({ message: response.message, type: 'error' });
        }

        const newAdmins = useAdmins
          .getState()
          .state.admins.filter(item => item._id !== response._id);

        useAdmins.setState({
          state: {
            admins: newAdmins,
          },
        });

        return Toast({
          message: 'Usuário deletado com sucesso',
          type: 'success',
        });
      });
  };

  useEffect(() => {
    setFilteredAdmins(admins);
  }, [admins]);

  return (
    <>
      <ModalListAdmins
        handleDeleteAdmin={handleDeleteAdmin}
        handleIsOpenModal={handleIsOpenModal}
        isVisible={isVisible}
        adminSelected={adminSelected}
      />
      <div className="flex w-full items-center justify-center border-b border-mainBlue/10 p-2 px-14">
        <Input
          type="text"
          styleOffButton="secund"
          onChange={handleFilter}
          icon={<Search className="text-mainBlue/80" />}
        />
      </div>

      <Table<IAdminInDataBase>
        columns={columns}
        data={filteredAdmins}
        onClick={handleIsOpenModal}
      />
    </>
  );
}
