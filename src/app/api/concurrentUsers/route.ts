import { NextRequest, NextResponse } from 'next/server';
import { Server } from '@/models/server';
import connectDB from '@/utils/db';
import log from '@/utils/logger';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Log request
    log('concurrent-users', request, NextResponse.next());

    // Get all servers
    const servers = await Server.find({}).lean();

    // Extract all online players
    const onlinePlayers: string[] = [];
    
    servers.forEach(server => {
      if (server.players.length > 0) {
        server.players.forEach(player => {
          onlinePlayers.push(player);
        });
      }
    });

    return NextResponse.json(onlinePlayers.length);
  } catch (error) {
    console.error(error);
    return new NextResponse(null, { status: 500 });
  }
}