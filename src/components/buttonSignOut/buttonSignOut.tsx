'use client';

import { signOut } from 'next-auth/react';

export default function ButtonSignOut() {
  return <h1 onClick={() => signOut()}> sair</h1>;
}
