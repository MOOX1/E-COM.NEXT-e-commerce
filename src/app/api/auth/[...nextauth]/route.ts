import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETE as string
    })
  ],
  pages: {
    signIn: '/login'
  }
});

// const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
