import { headers } from 'next/headers';
import { Session } from 'next-auth';
import { Fetch } from '@/services/fetch';

interface IGetServerSessionResponse {
  authenticated: boolean;
  access?: string;
}

export const getServerSession = async (): Promise<IGetServerSessionResponse> => {
  const response = await Fetch('/api/auth/session', {
    headers: {
      cookie: headers().get('cookies') ?? '',
    },
  });

  const session: Session = await response.json();

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
