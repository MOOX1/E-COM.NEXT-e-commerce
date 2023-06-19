import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import { CreateAdmin } from '@/lib/controllers/AdminsController';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  try {
    const session = await getToken({ req });

    if (!session || session.levelAccess !== 'admin super')
      return NextResponse.json({ error: 'Access denied' });

    const res = await req.json();

    const response = await CreateAdmin(res);

    revalidateTag(`all-admins`);

    return NextResponse.json(response);
  } catch (error) {
    console.log(error);
  }
}
