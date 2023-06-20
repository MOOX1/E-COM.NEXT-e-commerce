import { DeleteAdmin } from '@/lib/controllers/AdminsController';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

interface DeleteProps {
  params: {
    id: string;
  };
}

export async function DELETE(req: NextRequest, { params }: DeleteProps) {
  const session = await getToken({ req });

  if (!session || session.levelAccess !== 'admin super')
    return NextResponse.json({ error: 'Access denied' });

  const adminDeleted = await DeleteAdmin(params.id);

  return NextResponse.json(adminDeleted);
}
