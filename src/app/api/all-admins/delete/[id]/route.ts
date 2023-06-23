import { DeleteAdmin } from '@/lib/controllers/AdminsController';
import { getToken } from 'next-auth/jwt';
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

interface IDeleteProps {
  params: {
    id: string;
  };
}

export async function DELETE(req: NextRequest, { params }: IDeleteProps) {
  const session = await getToken({ req });

  if (!session || session.levelAccess !== 'admin super')
    return NextResponse.json({ error: 'Access denied' });

  const adminDeleted = await DeleteAdmin(params.id);

  revalidateTag(`all-admins`);

  return NextResponse.json(adminDeleted);
}
