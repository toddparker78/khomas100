import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const data = {
      fullName: String(form.get("fullName") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      category: String(form.get("category") || ""),
      clubTeam: String(form.get("clubTeam") || ""),
      emergencyName: String(form.get("emergencyName") || ""),
      emergencyPhone: String(form.get("emergencyPhone") || ""),
      consent: form.get("consent") === "on",
      notes: String(form.get("notes") || ""),
    };

    if (!data.fullName || !data.email || !data.category || !data.consent) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await prisma.entrant.create({ data });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
