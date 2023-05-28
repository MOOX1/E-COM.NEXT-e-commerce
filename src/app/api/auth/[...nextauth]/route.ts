import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import { FindAdmin } from '@/lib/controllers/AdminsController';

type ProviderType = 'google' | 'credentials';

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'password', type: 'text', placeholder: 'jsmith' }
      },
      async authorize(credentials, req) {
        const emailsAuthorized = ['vitormeneses87@gmail.com'];

        const admin = await FindAdmin(credentials?.email as string);

        const user = {
          id: '1',
          name: 'J Smith',
          email: credentials?.email as string,
          levelAccess: 'admin'
        };

        if (
          emailsAuthorized.includes(credentials?.email as string) &&
          credentials?.password === '123456'
        ) {
          return user;
        }
        return null;
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETE as string
    })
  ],
  jwt: {
    maxAge: 60 * 60 * 8 // 8 hours
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 8 // 8 hours
  },
  pages: {
    signIn: '/signin',
    error: '/signin'
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const emailsAuthorized = ['vitormeneses87@gmail.com'];
      const Provider = account?.provider as ProviderType;

      const providers = {
        google: emailsAuthorized.includes(user?.email as string),
        credentials: emailsAuthorized.includes(credentials?.email as string)
      }[Provider];

      return providers;
    },
    session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (user?.levelAccess) {
        token.levelAccess = user.levelAccess;
      }
      return token;
    }
  }
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
