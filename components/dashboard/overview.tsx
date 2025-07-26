"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Activity,
  Network,
  Eye,
  TrendingUp,
  Clock,
  Server,
  Lock,
  Zap,
  Target,
  BarChart3,
} from "lucide-react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const securityMetrics = [
  { name: "Jan", scans: 45, vulnerabilities: 12, resolved: 8 },
  { name: "Feb", scans: 52, vulnerabilities: 18, resolved: 15 },
  { name: "Mar", scans: 48, vulnerabilities: 9, resolved: 9 },
  { name: "Apr", scans: 61, vulnerabilities: 22, resolved: 18 },
  { name: "May", scans: 55, vulnerabilities: 15, resolved: 12 },
  { name: "Jun", scans: 67, vulnerabilities: 8, resolved: 8 },
]

const vulnerabilityData = [
  { name: "Critical", value: 3, color: "#ef4444" },
  { name: "High", value: 12, color: "#f97316" },
  { name: "Medium", value: 18, color: "#eab308" },
  { name: "Low", value: 25, color: "#22c55e" },
]

const recentScans = [
  { id: 1, target: "192.168.1.0/24", status: "completed", vulnerabilities: 5, timestamp: "2 hours ago" },
  { id: 2, target: "10.0.0.0/16", status: "running", vulnerabilities: 0, timestamp: "Running..." },
  { id: 3, target: "172.16.0.0/12", status: "completed", vulnerabilities: 12, timestamp: "1 day ago" },
  { id: 4, target: "api.example.com", status: "failed", vulnerabilities: 0, timestamp: "2 days ago" },
]

export default function DashboardOverview() {
  const [securityScore, setSecurityScore] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading and animate security score
    const timer = setTimeout(() => {
      setIsLoading(false)
      const interval = setInterval(() => {
        setSecurityScore((prev) => {
          if (prev >= 78) {
            clearInterval(interval)
            return 78
          }
          return prev + 1
        })
      }, 50)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "running":
        return "bg-blue-500 animate-pulse"
      case "failed":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Completed</Badge>
      case "running":
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse">Running</Badge>
      case "failed":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Failed</Badge>
      default:
        return <Badge>Unknown</Badge>
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6 animate-fade-in">
        {/* Loading Skeleton */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="glass-card">
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="h-4 bg-slate-700 rounded w-3/4 mb-2"></div>
                  <div className="h-8 bg-slate-700 rounded w-1/2"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="cyber-card hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Security Score</p>
                <div className="flex items-center space-x-2">
                  <p className="text-3xl font-bold text-cyber bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {securityScore}%
                  </p>
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
              </div>
              <div className="relative">
                <Shield className="h-8 w-8 text-blue-400" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <Progress value={securityScore} className="mt-3" />
          </CardContent>
        </Card>

        <Card className="cyber-card hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Active Scans</p>
                <p className="text-3xl font-bold text-white">3</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Activity className="h-3 w-3 mr-1" />2 running
                </p>
              </div>
              <Network className="h-8 w-8 text-green-400 animate-pulse" />
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Critical Issues</p>
                <p className="text-3xl font-bold text-red-400">3</p>
                <p className="text-xs text-red-400 flex items-center mt-1">
                  <AlertTriangle className="h-3 w-3 mr-1" />
                  Requires attention
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse" />
            </div>
          </CardContent>
        </Card>

        <Card className="cyber-card hover-lift">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Resolved Issues</p>
                <p className="text-3xl font-bold text-green-400">127</p>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  This month
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Security Trends */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-blue-400" />
              <span>Security Trends</span>
            </CardTitle>
            <CardDescription>Monthly scan activity and vulnerability trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={securityMetrics}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="scans"
                  stroke="#3B82F6"
                  strokeWidth={2}
                  dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="vulnerabilities"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ fill: "#EF4444", strokeWidth: 2, r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="resolved"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vulnerability Distribution */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-red-400" />
              <span>Vulnerability Distribution</span>
            </CardTitle>
            <CardDescription>Current vulnerability severity breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={vulnerabilityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {vulnerabilityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {vulnerabilityData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-gray-300">
                    {item.name}: {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Scans */}
        <Card className="lg:col-span-2 neon-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5 text-cyan-400" />
              <span>Recent Scans</span>
            </CardTitle>
            <CardDescription>Latest network security assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentScans.map((scan) => (
                <div
                  key={scan.id}
                  className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(scan.status)}`}></div>
                    <div>
                      <p className="font-medium text-white">{scan.target}</p>
                      <p className="text-sm text-gray-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {scan.timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {scan.vulnerabilities > 0 && (
                      <Badge variant="destructive" className="bg-red-500/20 text-red-400">
                        {scan.vulnerabilities} issues
                      </Badge>
                    )}
                    {getStatusBadge(scan.status)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full btn-cyber justify-start">
              <Network className="h-4 w-4 mr-2" />
              Start Network Scan
            </Button>
            <Button className="w-full btn-neon justify-start">
              <Shield className="h-4 w-4 mr-2" />
              Vulnerability Assessment
            </Button>
            <Button className="w-full bg-slate-800 hover:bg-slate-700 justify-start">
              <Server className="h-4 w-4 mr-2" />
              View Reports
            </Button>
            <Button className="w-full bg-slate-800 hover:bg-slate-700 justify-start">
              <Lock className="h-4 w-4 mr-2" />
              Security Settings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
