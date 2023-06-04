import './globals.css';
import { Quicksand, Poppins } from 'next/font/google';
import SessionProvider from '@/context/ContextSession';
import Layout from '@/components/layout/Layout';
import { cookies } from 'next/headers';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
});
const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = cookies().has('next-auth.session-token');
  const sessionProd = cookies().has('__Secure-next-auth.session-token');
  return (
    <html lang="pt_BR">
      <body
        className={`${poppins.variable} ${quicksand.variable} bg-bodyColor text-white h-auto  overflow-hidden`}
      >
        <SessionProvider>
          {session || sessionProd ? <Layout>{children}</Layout> : children}
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  );
}
