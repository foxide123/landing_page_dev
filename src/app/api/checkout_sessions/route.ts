"use server";

import { NextResponse } from "next/server";
import { CheckoutApiRequest, CheckoutApiResponse } from "@/types/api_types";

export async function POST(req: Request) {
  try {
    const { amount, currency, language } = (await req.json()) as CheckoutApiRequest;

    const res = await fetch("https://api.dashcruisedev.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency, language }),
    });
  
    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error }, { status: res.status });
    }
  
    const { sessionId } = (await res.json()) as CheckoutApiResponse;   
    return NextResponse.json({ sessionId: sessionId });
  } catch (error) {
    return NextResponse.json({
      error
    });
  }
}
