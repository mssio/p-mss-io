import type { NextRequest } from "next/server";
import { generatePassword } from "@/lib/password";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type } = await params;
  return Response.json({ password: generatePassword(), type });
}
