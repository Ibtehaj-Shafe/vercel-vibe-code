import { Sandbox } from "e2b";

export async function runInE2B(code: string) {
  const sandbox = await Sandbox.create();

  // e2b SDK typing workaround
  const result = await (sandbox as any).exec({
    cmd: ["node", "-e", code],
  });

  await (sandbox as any).kill();

  return {
    stdout: result?.stdout ?? "",
    stderr: result?.stderr ?? "",
  };
}
