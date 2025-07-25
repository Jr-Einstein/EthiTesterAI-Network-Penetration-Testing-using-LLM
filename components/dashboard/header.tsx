"use client"

import { useState } from "react"
import { Bell, Download, User } from "lucide-react"
import { useSession } from "next-auth/react"

interface Notification {
  id: string
  type: "warning" | "error" | "info" | "success"
  title: string
  message: string
  timestamp: string
  read: boolean
}

export default function DashboardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const { data: session } = useSession()
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "warning",
      title: "Suspicious Network Activity",
      message: "Unusual traffic patterns from IP 192.168.1.100",
      timestamp: "2 minutes ago",
      read: false,
    },
    {
      id: "2",
      type: "error",
      title: "Failed Login Attempts",
      message: "Multiple failed SSH attempts on server srv-01",
      timestamp: "15 minutes ago",
      read: false,
    },
    {
      id: "3",
      type: "info",
      title: "Certificate Expiring Soon",
      message: "SSL certificate for api.example.com expires in 7 days",
      timestamp: "1 hour ago",
      read: true,
    },
  ])
  const [showNotifications, setShowNotifications] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const generatePDFReport = () => {
    // This would integrate with a PDF generation library
    const reportContent = `
      EthiTesterAI Security Report
      Generated: ${new Date().toLocaleString()}
      
      Security Overview:
      - Active Scans: 3
      - Critical Issues: 1
      - Resolved Issues: 127
      - Security Score: 78/100
      
      Recent Vulnerabilities:
      - High Priority: 3 issues found
      - Medium Priority: 12 issues found
      - Low Priority: 22 issues found
      
      Recommendations:
      - Update SSL certificates
      - Patch identified vulnerabilities
      - Review access controls
      
      © EthiTesterAI 2025 - Project Societe Generale
    `

    const blob = new Blob([reportContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `ethitesterai-report-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {subtitle && <p className="text-gray-400 mt-1">{subtitle}</p>}
        </div>

        <div className="flex items-center space-x-4">
          {/* Download Report Button */}
          <button
            onClick={generatePDFReport}
            className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Bell className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-slate-700">
                  <h3 className="text-lg font-semibold text-white">Recent Alerts</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-slate-700 hover:bg-slate-700 transition-colors ${
                        !notification.read ? "bg-slate-700/50" : ""
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            notification.type === "error"
                              ? "bg-red-500"
                              : notification.type === "warning"
                                ? "bg-yellow-500"
                                : notification.type === "success"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                          }`}
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 text-center">
                  <button className="text-blue-400 hover:text-blue-300 text-sm">View All Alerts</button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-white text-sm">{session?.user?.name || "Admin"}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
