import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"
import bcrypt from "bcryptjs"
import { sendWelcomeEmail } from "@/lib/nodemailer"

const client = new MongoClient(process.env.MONGODB_URI || "")

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    await client.connect()
    const db = client.db("ethitesterai")
    const users = db.collection("users")

    // Check if user already exists
    const existingUser = await users.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user
    const result = await users.insertOne({
      name,
      email,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
      isActive: true,
      lastLogin: null,
      preferences: {
        emailNotifications: true,
        theme: "dark",
        language: "en",
      },
    })

    // Send welcome email
    try {
      await sendWelcomeEmail(email, name)
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't fail registration if email fails
    }

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: result.insertedId,
        emailSent: true,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  } finally {
    await client.close()
  }
}
