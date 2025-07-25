import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const client = await clientPromise
    const db = client.db("ethitesterai")
    const scans = db.collection("scans")

    const scanData = {
      ...body,
      userId: session.user.id,
      createdAt: new Date(),
      status: "initiated",
    }

    const result = await scans.insertOne(scanData)

    return NextResponse.json({
      success: true,
      scanId: result.insertedId,
    })
  } catch (error) {
    console.error("Error saving scan:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const client = await clientPromise
    const db = client.db("ethitesterai")
    const scans = db.collection("scans")

    const userScans = await scans.find({ userId: session.user.id }).sort({ createdAt: -1 }).limit(10).toArray()

    return NextResponse.json({ scans: userScans })
  } catch (error) {
    console.error("Error fetching scans:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
