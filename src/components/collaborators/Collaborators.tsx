import React, { Suspense, useState } from 'react';
import { TableProps } from '../table/types';
import Load from '../load/Load';
import ListCollaborators from './ListCollaborators/ListCollaborators';
import { Fetch } from '@/services/fetch';

export default async function Collaborators() {
  let admins: TableProps = { columns: [], data: [] };
  try {
    const response = await Fetch(`/api/all-admins`, {
      next: {
        revalidate: 0
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
