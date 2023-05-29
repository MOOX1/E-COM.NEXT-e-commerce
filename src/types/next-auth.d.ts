import NextAuth, { DefaultSession, DefaultUser, User } from 'next-auth';
import { JWT, DefaultJWT, user } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      levelAccess: string;
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
