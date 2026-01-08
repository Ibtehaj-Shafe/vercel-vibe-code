import { NextRequest, NextResponse } from "next/server";
import { trigger } from "../../../../../../src/trigger/client";
/**
 * GET: Return command status (simplified replacement for Vercel Sandbox)
 */
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ sandboxId: string; cmdId: string }> }
) {
  const { sandboxId, cmdId } = await params;

  return NextResponse.json({
    sandboxId,
    cmdId,
    startedAt: Date.now(),
    exitCode: 0,
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
