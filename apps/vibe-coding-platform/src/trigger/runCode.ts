import { task } from "@trigger.dev/sdk";
import { runInE2B } from "../lib/e2bRunner";

export const runCodeTask = task({
  id: "run-code",
  run: async ({ code }: { code: string }) => {
    try {
      return await runInE2B(code);
    } catch (error: any) {
      return { stderr: error.message };
    }
  },
});
