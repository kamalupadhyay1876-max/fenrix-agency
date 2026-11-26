import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json() as { name?: string; email?: string; service?: string; message?: string };
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    if (!name || !emailPattern.test(email) || message.length < 12) {
      return NextResponse.json({ ok: false, message: "Please provide a name, valid email, and a little more project context." }, { status: 400 });
    }
    console.info("Fenrix enquiry received", { name, email, service: body.service ?? "unspecified", messageLength: message.length });
    return NextResponse.json({ ok: true, message: "Thanks — your enquiry is ready for the Fenrix team." });
  } catch {
    return NextResponse.json({ ok: false, message: "We could not process that enquiry. Please email kamalupadhyay1876@gmail.com." }, { status: 500 });
  }
}
