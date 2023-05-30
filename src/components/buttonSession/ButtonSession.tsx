'use client';

import { useSession } from 'next-auth/react';

export default function ButtonSession() {
  const session = useSession();

  return <button onClick={() => console.log(session)}>Session</button>;
}
