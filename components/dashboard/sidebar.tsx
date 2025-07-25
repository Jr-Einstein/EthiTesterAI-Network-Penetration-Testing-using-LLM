"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import { BarChart3, Network, Shield, FileText, Settings, LogOut, User } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: BarChart3 },
  { name: "Network Scan", href: "/dashboard/network-scan", icon: Network },
  { name: "Vulnerability Assessment", href: "/dashboard/vulnerability", icon: Shield },
  { name: "Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Risk Mitigation", href: "/dashboard/risk-mitigation", icon: Shield },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardSidebar() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    await signOut({ callbackUrl: "/login" })
  }

  return (
    <div className="flex flex-col h-full bg-slate-900 border-r border-slate-700">
      {/* Logo */}
      <div className="flex items-center px-6 py-4 border-b border-slate-700">
        <Shield className="h-8 w-8 text-blue-400 mr-2" />
        <span className="text-xl font-bold text-white">EthiTesterAI</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive ? "bg-blue-600 text-white shadow-lg" : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="border-t border-slate-700 p-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">{session?.user?.name || "Security Admin"}</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors disabled:opacity-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  )
}
