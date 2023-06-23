import { FindAllAdmins } from '@/lib/controllers/AdminsController';
import { getServerSession } from '@/lib/controllers/IsAuthenticated';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const IsAuthenticate = await getServerSession();

    if (!IsAuthenticate.authenticated) {
      return NextResponse.json({ message: 'access denied', status: 401 });
    }

    if (IsAuthenticate.access !== 'admin super') {
      if (IsAuthenticate.access !== 'admin simple') {
        return NextResponse.json({ message: 'access denied', status: 401 });
      }
    }

    const admins = await FindAllAdmins();

    return NextResponse(
      JSON.stringify({
        columns: ['image', 'name', 'email', 'levelAccess'],
        data: admins
      })
    );
  } catch (error) {
    console.log(error);
  }
}
