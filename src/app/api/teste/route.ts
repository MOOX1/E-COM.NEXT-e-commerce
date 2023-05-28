import { NextRequest, NextResponse } from 'next/server';
import database from '@/lib/database/mongodb';

export async function GET(req: NextRequest) {
  return NextResponse.json({});
}
