import React, { Suspense } from 'react';
import { ITableProps } from '../Table/types';
import Load from '../atoms/Load';
import ListCollaborators from './ListCollaborators';
import { Fetch } from '@/services/fetch';
import { headers as Headers } from 'next/headers';
import { useAdmins } from '@/hooks/admins';
import InitializerAdmins from './InitializerAdmin';
import { IAdminInDataBase } from '@/types/admins';

export default async function Collaborators() {
  let admins: IAdminInDataBase[] = [];
  try {
    const responseJson = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 60,
        tags: ['all-admins'],
      },
      headers: {
        cookies: Headers().get('cookie') ?? '',
      },
    });

    const response: { data: IAdminInDataBase[] } = await responseJson.json();

    admins = response.data;

    useAdmins.setState({
      state: {
        admins: admins,
      },
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <InitializerAdmins admins={admins} />
      <Suspense fallback={<Load />}>
        <ListCollaborators />
      </Suspense>
    </>
  );
}
