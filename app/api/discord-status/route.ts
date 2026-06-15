import { NextResponse } from "next/server";

const DISCORD_WIDGET_URL = "https://discord.com/api/guilds/1109996020471427152/widget.json";

export async function GET() {
  try {
    const response = await fetch(DISCORD_WIDGET_URL, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json({ onlineCount: null, memberCount: null });
    }

    const json = await response.json();
    const onlineCount = typeof json.presence_count === "number" ? json.presence_count : null;
    const memberCount = typeof json.members === "number" ? json.members : null;

    return NextResponse.json({ onlineCount, memberCount });
  } catch {
    return NextResponse.json({ onlineCount: null, memberCount: null });
  }
}
