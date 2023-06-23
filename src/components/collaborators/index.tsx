import React, { Suspense } from 'react';
import { ITableProps } from '../Table/types';
import Load from '../Load';
import ListCollaborators from './ListCollaborators';
import { Fetch } from '@/services/fetch';
import { cookies } from 'next/headers';
import { useAdmins } from '@/hooks/admins';
import InitializerAdmins from './InitializerAdmin';

export default async function Collaborators() {
  let admins: ITableProps = { columns: [], data: [] };
  try {
    const response = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 60,
        tags: ['all-admins']
      },
      headers: {
        cookies: JSON.stringify(cookies().getAll()) ?? ''
      }
    });
    admins = await response.json();
    useAdmins.setState({
      state: {
        admins: {
          columns: admins.columns,
          data: admins.data
        }
      }
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
