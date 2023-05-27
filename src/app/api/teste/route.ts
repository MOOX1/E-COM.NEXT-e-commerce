import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: NextRequest) {
  // If you don't have NEXTAUTH_SECRET set, you will have to pass your secret as `secret` to `getToken`
  const token = await getToken({ req });

  const isAuthenticated = cookies().getAll();

  return NextResponse.json({});
}
