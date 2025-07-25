"use client"

import type React from "react"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import DashboardSidebar from "@/components/dashboard/sidebar"
import ScrollEffects from "@/components/cursor-trail"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return // Still loading
    if (!session) router.push("/login")
  }, [session, status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <ScrollEffects />
      <div className="w-64 flex-shrink-0">
        <DashboardSidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  )
}
