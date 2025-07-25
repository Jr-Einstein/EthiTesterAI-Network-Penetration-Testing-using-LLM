"use client"

import { useState } from "react"
import { Activity, AlertTriangle, CheckCircle, TrendingUp, Network, RefreshCw } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import DashboardHeader from "@/components/dashboard/header"

export default function DashboardOverview() {
  const [stats, setStats] = useState({
    activeScans: 3,
    criticalIssues: 1,
    resolvedIssues: 127,
    securityScore: 78,
  })

  const vulnerabilityTrends = [
    { name: "Jan", critical: 4, high: 12, medium: 28, low: 45 },
    { name: "Feb", critical: 3, high: 15, medium: 32, low: 38 },
    { name: "Mar", critical: 2, high: 8, medium: 25, low: 42 },
    { name: "Apr", critical: 1, high: 6, medium: 18, low: 35 },
    { name: "May", critical: 0, high: 4, medium: 15, low: 28 },
    { name: "Jun", critical: 1, high: 3, medium: 12, low: 22 },
  ]

  const vulnerabilityDistribution = [
    { name: "Critical", value: 2, color: "#ef4444" },
    { name: "High", value: 12, color: "#f97316" },
    { name: "Medium", value: 18, color: "#eab308" },
    { name: "Low", value: 5, color: "#22c55e" },
  ]

  const networkAssets = [
    { name: "Web Servers", count: 12, status: "healthy" },
    { name: "Database Servers", count: 8, status: "warning" },
    { name: "Mail Servers", count: 4, status: "healthy" },
    { name: "DNS Servers", count: 2, status: "critical" },
    { name: "Load Balancers", count: 6, status: "healthy" },
  ]

  const recentAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Suspicious Network Activity",
      description: "Unusual traffic patterns from IP 192.168.1.100",
      timestamp: "2 minutes ago",
      status: "investigating",
    },
    {
      id: 2,
      type: "error",
      title: "Failed Login Attempts",
      description: "Multiple failed SSH attempts on server srv-01",
      timestamp: "15 minutes ago",
      status: "resolved",
    },
    {
      id: 3,
      type: "info",
      title: "Certificate Expiring Soon",
      description: "SSL certificate for api.example.com expires in 7 days",
      timestamp: "1 hour ago",
      status: "acknowledged",
    },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader title="Security Overview" subtitle="Monitor and manage your security posture" />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Scans</p>
                <p className="text-2xl font-bold text-blue-400">{stats.activeScans}</p>
              </div>
              <Activity className="h-8 w-8 text-blue-400" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-red-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Critical Issues</p>
                <p className="text-2xl font-bold text-red-400">{stats.criticalIssues}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-green-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Resolved Issues</p>
                <p className="text-2xl font-bold text-green-400">{stats.resolvedIssues}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-yellow-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Security Score</p>
                <p className="text-2xl font-bold text-yellow-400">{stats.securityScore}/100</p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Vulnerability Distribution */}
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover-neon transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Vulnerability Distribution</h3>
              <button className="text-gray-400 hover:text-white">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={vulnerabilityDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid #3b82f6",
                    borderRadius: "12px",
                    backdropFilter: "blur(16px)",
                  }}
                />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Alerts */}
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover-neon transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Recent Alerts</h3>
              <button className="text-blue-400 hover:text-blue-300 text-sm">View All</button>
            </div>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === "error" ? "bg-red-500" : alert.type === "warning" ? "bg-yellow-500" : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white">{alert.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">{alert.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-xs text-gray-500">{alert.timestamp}</p>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          alert.status === "resolved"
                            ? "bg-green-500/20 text-green-400"
                            : alert.status === "investigating"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-blue-500/20 text-blue-400"
                        }`}
                      >
                        {alert.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Assets and Vulnerability Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Network Assets */}
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover-neon transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Network Assets</h3>
              <button className="text-gray-400 hover:text-white">
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3">
              {networkAssets.map((asset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Network className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-sm font-medium text-white">{asset.name}</p>
                      <p className="text-xs text-gray-400">{asset.count} instances</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      asset.status === "healthy"
                        ? "bg-green-500/20 text-green-400"
                        : asset.status === "warning"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {asset.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Vulnerability Trends */}
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 hover-neon transition-all duration-500">
            <h3 className="text-lg font-bold text-white mb-4">Vulnerability Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={vulnerabilityTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(15, 23, 42, 0.9)",
                    border: "1px solid #3b82f6",
                    borderRadius: "12px",
                    backdropFilter: "blur(16px)",
                  }}
                />
                <Line type="monotone" dataKey="critical" stroke="#ef4444" strokeWidth={2} />
                <Line type="monotone" dataKey="high" stroke="#f97316" strokeWidth={2} />
                <Line type="monotone" dataKey="medium" stroke="#eab308" strokeWidth={2} />
                <Line type="monotone" dataKey="low" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
