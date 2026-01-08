import { NextRequest, NextResponse } from "next/server";
import { trigger } from "../../../../src/trigger/client";

/**
 * GET: Sandbox status (simplified replacement)
 */
export async function GET() {
  return NextResponse.json({
    status: "running",
  });
}

/**
 * POST: Execute code using Trigger.dev + e2b
 */
export async function POST(request: NextRequest) {
  const body = await request.json();

  const code =
    body?.cmd ??
    body?.code ??
    body?.args?.join(" ") ??
    "";

  const event = await trigger.sendEvent({
    name: "run-code",
    payload: { code },
  });

  return NextResponse.json({
    sandboxId: "trigger-dev",
    cmdId: event.id,
    startedAt: Date.now(),
  });
}
