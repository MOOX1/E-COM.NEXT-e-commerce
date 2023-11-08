import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      levelAccess: 'admin super' | 'admin simple' | 'admin viewer';
    } & DefaultSession['user'];
  }

  interface User {
    levelAccess: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    levelAccess: string;
    id: string;
  }
}

export {};
