import './globals.css';
import { Quicksand, Poppins } from 'next/font/google';
import SessionProvider from '@/context/ContextSession';
import Layout from '@/components/layout/Layout';
import { cookies } from 'next/headers';

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
  return (
    <html lang="pt_BR">
      <body
        className={`${poppins.variable} ${quicksand.variable} bg-bodyColor text-white h-auto  overflow-hidden`}
      >
        <SessionProvider>
<<<<<<< HEAD
          {session ? <Layout>{children}</Layout> : children}
=======
          {/* {session || sessionProd ? <Layout>{children}</Layout> : children} */}
          {children}
>>>>>>> 647c2c276c3be1a8e204169f6b1e619d677e1d9d
        </SessionProvider>
      </body>
    </html>
  );
}
