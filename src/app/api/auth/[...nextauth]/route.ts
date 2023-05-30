import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

import database from '@/lib/database/mongodb';
import Admins from '@/lib/Schemas/adminsSchema';

import { UpstashRedisAdapter } from '@next-auth/upstash-redis-adapter';
import { Redis } from '@upstash/redis';
import { cookies } from 'next/headers';
interface DataOfDatabase {
  _id: string;
  email: string;
  levelAccess: string;
}
const redis = Redis.fromEnv();

export const authOption: NextAuthOptions = {
  adapter: UpstashRedisAdapter(redis),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
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
      try {
        const RateLimit = cookies().get('error-rate-limit');
        if (RateLimit) return false;

        const emailUser =
          account && account?.provider == 'email'
            ? account.providerAccountId
            : profile?.email;

        await database.connect();
        const admin = await Admins.findOne({ email: emailUser });

        if (admin !== null) {
          const data: DataOfDatabase = {
            _id: admin._doc._id.toString(),
            email: admin._doc.email,
            levelAccess: admin._doc.levelAccess
          };

          user.id = data._id;
          user.levelAccess = data.levelAccess;

          if (account?.provider == 'google') return true;

          return data as unknown as boolean;
        }
        return undefined as unknown as boolean;
      } catch (error) {
        console.log(error);
      }
      return undefined as unknown as boolean;
    },
    session({ session, token, user }) {
      if (user) {
        session.user.levelAccess = user.levelAccess;
      } else {
        session.user.levelAccess = token.levelAccess;
      }

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
