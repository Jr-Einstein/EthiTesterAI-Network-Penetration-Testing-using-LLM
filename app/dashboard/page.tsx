"use client"

import DashboardHeader from "@/components/dashboard/header"
import DashboardOverview from "@/components/dashboard/overview"

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader title="Security Dashboard" subtitle="Monitor and manage your security posture" />
      <main className="flex-1 overflow-y-auto p-6 bg-cyber-grid">
        <DashboardOverview />
      </main>
    </div>
  )
}
