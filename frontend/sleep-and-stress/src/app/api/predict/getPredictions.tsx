import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  const { sleepQuality, sleepDuration } = await request.json();

  try {
    if (!sleepQuality || !sleepDuration) {
      throw new Error("Missing required fields");
    }
    const data = await fetch("http://localhost:8080/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sleepQuality, sleepDuration }),
    });

    const prediction = await data.json();

    return NextResponse.json({ ok: true, status: 200, prediction });
  } catch (error: any) {
    return NextResponse.json({ ok: false, status: 500, error: error.message });
  }
}
