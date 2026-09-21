import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const list = await db
      .select()
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt))
      .limit(20);
    return NextResponse.json({ success: true, data: list });
  } catch (error) {
    console.error("Failed to fetch inquiries:", error);
    return NextResponse.json(
      { success: false, error: "Database not ready or error fetching inquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, preferredDate, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const [newInquiry] = await db
      .insert(inquiries)
      .values({
        name: String(name).trim(),
        email: String(email).trim(),
        service: String(service || "Web Development"),
        budget: budget ? String(budget) : "Flexible",
        preferredDate: preferredDate ? String(preferredDate) : null,
        message: String(message).trim(),
      })
      .returning();

    return NextResponse.json({ success: true, data: newInquiry }, { status: 201 });
  } catch (error) {
    console.error("Failed to submit inquiry:", error);
    return NextResponse.json(
      { success: false, error: "Failed to record inquiry." },
      { status: 500 }
    );
  }
}
