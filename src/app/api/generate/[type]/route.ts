import type { NextRequest } from "next/server";
import { generatePassword } from "@/lib/password";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/generate/[type]">,
) {
  const { type } = await ctx.params;
  return Response.json({ password: generatePassword(), type });
}
 