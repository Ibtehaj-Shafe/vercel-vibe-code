import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    models: [
      {
        id: "local-dummy-model",
        name: "Local Dummy Model",
        provider: "local",
      },
    ],
  });
}
