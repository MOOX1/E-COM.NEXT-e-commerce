import React from 'react';

import ListCollaborators from './ListCollaborators';
import { Fetch } from '@/services/fetch';
import { useAdmins } from '@/hooks/admins';
import InitializerAdmins from './InitializerAdmin';
import { IAdminInDataBase } from '@/types/admins';

export default async function Collaborators() {
  let admins: IAdminInDataBase[] = [];
  try {
    const response: { data: IAdminInDataBase[] } = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 60,
        tags: ['all-admins'],
      },
    });

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

      <ListCollaborators />
    </>
  );
}
