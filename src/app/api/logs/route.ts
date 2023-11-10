import { getServerSession } from '@/lib/controllers/IsAuthenticated';
import { FindAllLogs } from '@/lib/controllers/LogsController';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const IsAuthenticate = await getServerSession();

    if (!IsAuthenticate.authenticated) {
      return NextResponse.json({ message: 'access denied', status: 401 });
    }

    const logs = await FindAllLogs();

    return NextResponse.json({ logs, status: 200 });
  } catch (error) {
    console.log(error);
  }
}
