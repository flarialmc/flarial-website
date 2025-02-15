import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import { Player } from '@/models/player';

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json(
      { error: 'Database connection failed' },
      { status: 503 }
    );
  }

  try {
    const totalUsers = await Player.countDocuments();
    return NextResponse.json(totalUsers);
  } catch (error) {
    console.error('Failed to count users:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve user count' },
      { status: 500 }
    );
  }
}