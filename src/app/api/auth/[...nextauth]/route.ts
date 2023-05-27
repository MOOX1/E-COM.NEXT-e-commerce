/* eslint-disable @typescript-eslint/no-explicit-any */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';
import type { User, Awaitable } from 'next-auth';
import { signIn } from 'next-auth/react';

export const authOption: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        console.log(credentials);
        console.log(req);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }

        return user;

        // Return null if user data could not be retrieved
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
    maxAge: 60 * 60 * 8 // 8 hours
  },
  pages: {
    signIn: '/login'
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log(credentials);
    //   console.log(email);
    //   console.log(user);
    //   return;
    // },
  }
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
