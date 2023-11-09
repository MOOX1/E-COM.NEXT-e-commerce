import { getServerSession } from '@/lib/controllers/IsAuthenticated';
import { FindAllProducts } from '@/lib/controllers/ProductsController';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const IsAuthenticate = await getServerSession();

    if (!IsAuthenticate.authenticated) {
      return NextResponse.json({ message: 'access denied', status: 401 });
    }

    const products = await FindAllProducts();

    return NextResponse.json({ status: 200, products });
  } catch (error) {
    console.log(error);
  }
}
