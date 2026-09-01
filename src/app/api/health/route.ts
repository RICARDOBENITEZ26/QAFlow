import { NextResponse } from "next/server";

type HealthResponse = {
  status: "ok";
  service: "qaflow";
};

export function GET(): NextResponse<HealthResponse> {
  return NextResponse.json({
    status: "ok",
    service: "qaflow",
  });
}
