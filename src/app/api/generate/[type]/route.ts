import type { NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/generate/[type]">,
) {
  const { type } = await ctx.params;
  return Response.json({ message: "Hello World", type });
}
