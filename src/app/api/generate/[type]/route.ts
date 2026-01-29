import type { NextRequest } from "next/server";
import { generatePassword } from "@/lib/password";

export async function GET(
  _req: NextRequest,
  { params }: { params: { type: string } },
) {
  const { type } = params;
  return Response.json({ password: generatePassword(), type });
}
