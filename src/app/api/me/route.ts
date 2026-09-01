import { NextResponse } from "next/server";
import { ApplicationError, toErrorResponse } from "@/lib/errors";
import { requireAuthenticatedSession } from "@/lib/auth/session";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const session = await requireAuthenticatedSession();

    return NextResponse.json({
      user: session.user,
    });
  } catch (error) {
    const statusCode = error instanceof ApplicationError ? error.statusCode : 500;

    return NextResponse.json(toErrorResponse(error), { status: statusCode });
  }
}
