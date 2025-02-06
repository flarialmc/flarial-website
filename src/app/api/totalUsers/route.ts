import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import { Player } from '@/models/player';

export async function GET() {
  try {
    await connectDB();
    const totalUsers = await Player.countDocuments();
    return NextResponse.json(totalUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}