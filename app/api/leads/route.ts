import { NextResponse } from "next/server"
import { leadSchema } from "@/lib/validators"

export async function POST(req: Request) {
  try {
    let json
    try {
      json = await req.json()
    } catch (error) {
      return NextResponse.json(
        { success: false, message: "Invalid JSON" },
        { status: 400 }
      )
    }

    // Validate with Zod
    const parse = leadSchema.safeParse(json)
    if (!parse.success) {
      return NextResponse.json(
        { success: false, errors: parse.error.format() },
        { status: 400 }
      )
    }

    const lead = parse.data

    // Honeypot check - if filled, it's likely a bot
    if (lead.honeypot) {
      // Return success to avoid revealing the honeypot
      return NextResponse.json(
        { success: true, message: "Lead received" },
        { status: 201 }
      )
    }

    // TODO: Persist to database or send email
    // Example: await db.leads.create({ data: lead })
    // Example: await sendEmail(lead)

    // For now, just log (in production, you'd save to DB or send email)
    console.log("Lead received:", {
      name: lead.name,
      email: lead.email,
      company: lead.company,
      interest: lead.interest,
    })

    return NextResponse.json(
      { success: true, message: "Lead received" },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error processing lead:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

