import { cookies, headers } from 'next/headers';
import { Session } from 'next-auth';
import { Fetch } from '@/services/fetch';

interface IGetServerSessionResponse {
  authenticated: boolean;
  access?: string;
}

export const getServerSession = async (): Promise<IGetServerSessionResponse> => {
  const cookiesStore = cookies();

  const cookieString = cookiesStore
    .getAll()
    .map(cookie => `${cookie.name}=${cookie.value}`)
    .join('; ');

  const response = await Fetch('/api/auth/session', {
    headers: {
      cookie: cookieString ?? '',
    },
  });

  const session: Session = response;

  if (!session.user) {
    return {
      authenticated: false,
    };
  }

  return {
    authenticated: true,
    access: session.user.levelAccess.toLowerCase(),
  };
};
