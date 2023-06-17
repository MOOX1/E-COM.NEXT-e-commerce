// import { cookies, headers } from 'next/headers';
// import { getServerSession as originalGetServerSession } from 'next-auth';
// import { authOption } from '@/app/api/auth/[...nextauth]/route';

// export const getServerSession = async () => {
//   const req = {
//     headers: Object.fromEntries(headers() as Headers),
//     cookies: Object.fromEntries(
//       cookies()
//         .getAll()
//         .map((c) => [c.name, c.value])
//     )
//   };
//   const res = { getHeader() {}, setCookie() {}, setHeader() {} };
//   const authOptions = authOption;

//   const session = await originalGetServerSession(
//     req as any,
//     res as any,
//     authOptions
//   );
//   return session;
// };
