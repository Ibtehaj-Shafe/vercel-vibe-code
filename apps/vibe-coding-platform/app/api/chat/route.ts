import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    message: "Chat is disabled in this demo. Code execution uses Trigger.dev + e2b.",
  });
}
