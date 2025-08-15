import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newEntrant = await prisma.entrant.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        category: body.category,
        clubTeam: body.clubTeam || "",
        emergencyName: body.emergencyName,
        emergencyPhone: body.emergencyPhone,
        consent: body.consent,
        notes: body.notes || "",
      },
    });

    return NextResponse.json({ success: true, entrant: newEntrant });
  } catch (err) {
    console.error("Error creating entrant:", err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
