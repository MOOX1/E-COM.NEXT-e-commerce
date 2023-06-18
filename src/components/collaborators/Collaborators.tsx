import React, { Suspense } from 'react';
import { TableProps } from '../table/types';
import Load from '../load/Load';
import ListCollaborators from './ListCollaborators/ListCollaborators';
import { Fetch } from '@/services/fetch';
import { headers as Headers } from 'next/headers';

export default async function Collaborators() {
  let admins: TableProps = { columns: [], data: [] };
  try {
    const response = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 10
      },
      headers: {
        cookies: Headers().get('cookie') ?? ''
      }
    });
    admins = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Suspense fallback={<Load />}>
        <ListCollaborators admins={admins} />
      </Suspense>
    </>
  );
}
