import * as Trigger from "@trigger.dev/sdk";

export const trigger = (Trigger as any).client({
  id: "vibe-code-trigger",
  apiKey: process.env.TRIGGER_API_KEY!,
});
