import { NextResponse, NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const data = [
      {
        type: 'add',
        autor: {
          id: 'oivnoxinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Cadastrou produto',
        description: 'Cadastrou o produto pão de forma',
        date: new Date(),
      },
      {
        type: 'edit',
        autor: {
          id: 'oivnoxcslkinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Editou produto',
        description: 'Editou o produto pão de forma',
        date: new Date(),
      },
      {
        type: 'delete',
        autor: {
          id: 'oivnolk\vlxinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Deletou produto',
        description: 'Deletou o produto pão de forma',
        date: new Date(),
      },
      {
        type: 'add',
        autor: {
          id: 'oivnoxinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Cadastrou produto',
        description: 'Cadastrou o produto pão de forma',
        date: new Date(),
      },
      {
        type: 'edit',
        autor: {
          id: 'oivnoxcslkinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Editou produto',
        description: 'Editou o produto pão de forma',
        date: new Date(),
      },
      {
        type: 'delete',
        autor: {
          id: 'oivnolk\vlxinvsdno',
          levelAccess: 'admin super',
          email: 'vitormeneses87@gmail.com',
          image: '',
          name: 'Vitor Meneses',
        },
        titulo: 'Deletou produto',
        description: 'Deletou o produto pão de forma',
        date: new Date(),
      },
    ];
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
  }
}
