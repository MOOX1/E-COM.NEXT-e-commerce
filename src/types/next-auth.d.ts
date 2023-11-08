import { DefaultSession } from 'next-auth';

export type TLevelAccess = 'admin super' | 'admin simple' | 'admin viewer';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      levelAccess: TLevelAccess;
    } & DefaultSession['user'];
  }

  interface User {
    levelAccess: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    levelAccess: TLevelAccess;
    id: string;
  }
}

export {};
