import { cookies, headers } from 'next/headers';
import { Session } from 'next-auth';

interface GetServerSessionResponse {
  authenticated: boolean;
  access?: string;
}

export const getServerSession = async (): Promise<GetServerSessionResponse> => {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie: headers().get('cookies') ?? ''
    }
  });

  const session: Session = await response.json();

  if (!session.user) {
    return {
      authenticated: false
    };
  }

  return {
    authenticated: true,
    access: session.user.levelAccess
  };
};
