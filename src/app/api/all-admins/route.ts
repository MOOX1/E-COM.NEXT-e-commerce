import { TableProps } from '@/components/table/types';
import { NextResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest): Promise<TableProps | undefined> {
  try {
    const data = {
      columns: ['image', 'name', 'email', 'acesso'],
      data: [
        {
          image: null,
          name: 'Vitor Meneses',
          acesso: 'admin super',
          email: 'vitormeneses87@gmail.com'
        },
        {
          image: null,
          name: 'Vitor Meneses',
          acesso: 'admin super',
          email: 'vitormeneses87@gmail.com'
        },
        {
          image: null,
          name: 'Vitor Meneses',
          acesso: 'admin super',
          email: 'vitormeneses87@gmail.com'
        },
        {
          image: null,
          name: 'Vitor Meneses',
          acesso: 'admin super',
          email: 'vitormeneses87@gmail.com'
        }
      ]
    };
    return NextResponse.json(data) as unknown as TableProps;
  } catch (error) {
    console.log(error);
  }
}
