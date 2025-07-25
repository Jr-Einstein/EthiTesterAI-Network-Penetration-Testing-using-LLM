"use client"

import { useState } from "react"
import { Play, Save, RefreshCw, Globe, Server } from "lucide-react"
import DashboardHeader from "@/components/dashboard/header"

export default function NetworkScanPage() {
  const [scanConfig, setScanConfig] = useState({
    targetIP: "",
    ipRange: "",
    scanType: "comprehensive",
    priorityLevel: "high",
    portScanning: true,
    vulnerabilityAssessment: true,
    serviceDetection: true,
    complianceTesting: false,
    inScopeTargets: "",
    outOfScopeTargets: "",
  })

  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)

  const handleInputChange = (field: string, value: any) => {
    setScanConfig((prev) => ({ ...prev, [field]: value }))
  }

  const startScan = async () => {
    setIsScanning(true)
    setScanProgress(0)

    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 500)

    // Save scan configuration to database (mock)
    try {
      const response = await fetch("/api/scans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scanConfig),
      })
      console.log("Scan configuration saved")
    } catch (error) {
      console.error("Error saving scan config:", error)
    }
  }

  const saveConfiguration = async () => {
    try {
      const response = await fetch("/api/scan-configs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scanConfig),
      })
      console.log("Configuration saved")
    } catch (error) {
      console.error("Error saving configuration:", error)
    }
  }

  const recentScans = [
    { id: 1, target: "192.168.1.0/24", status: "completed", vulnerabilities: 15, timestamp: "2 hours ago" },
    { id: 2, target: "api.company.com", status: "running", vulnerabilities: 8, timestamp: "30 minutes ago" },
    { id: 3, target: "10.0.0.0/16", status: "completed", vulnerabilities: 23, timestamp: "1 day ago" },
    { id: 4, target: "mail.company.com", status: "failed", vulnerabilities: 0, timestamp: "2 days ago" },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader
        title="Network Security Scan"
        subtitle="Configure and execute comprehensive network security assessments"
      />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Scan Configuration */}
        <div className="glass-effect p-6 rounded-xl border border-blue-500/20 mb-8">
          <h2 className="text-xl font-bold text-white mb-6">Scan Configuration</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Target IP / Domain</label>
              <input
                type="text"
                value={scanConfig.targetIP}
                onChange={(e) => handleInputChange("targetIP", e.target.value)}
                placeholder="192.168.1.1 or example.com"
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">IP Range (CIDR)</label>
              <input
                type="text"
                value={scanConfig.ipRange}
                onChange={(e) => handleInputChange("ipRange", e.target.value)}
                placeholder="192.168.1.0/24"
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Scan Type</label>
              <select
                value={scanConfig.scanType}
                onChange={(e) => handleInputChange("scanType", e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              >
                <option value="quick">Quick Scan</option>
                <option value="comprehensive">Comprehensive Scan</option>
                <option value="stealth">Stealth Scan</option>
                <option value="custom">Custom Scan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Priority Level</label>
              <select
                value={scanConfig.priorityLevel}
                onChange={(e) => handleInputChange("priorityLevel", e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
              >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
                <option value="critical">Critical Priority</option>
              </select>
            </div>
          </div>

          {/* Scope Configuration */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Scope Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={scanConfig.portScanning}
                    onChange={(e) => handleInputChange("portScanning", e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-slate-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Port Scanning</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={scanConfig.vulnerabilityAssessment}
                    onChange={(e) => handleInputChange("vulnerabilityAssessment", e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-slate-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Vulnerability Assessment</span>
                </label>
              </div>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={scanConfig.serviceDetection}
                    onChange={(e) => handleInputChange("serviceDetection", e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-slate-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Service Detection</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={scanConfig.complianceTesting}
                    onChange={(e) => handleInputChange("complianceTesting", e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-slate-800 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-300">Compliance Testing</span>
                </label>
              </div>
            </div>
          </div>

          {/* In-Scope and Out-of-Scope */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">In-Scope Targets</label>
              <textarea
                value={scanConfig.inScopeTargets}
                onChange={(e) => handleInputChange("inScopeTargets", e.target.value)}
                placeholder="192.168.1.1-192.168.1.100&#10;api.company.com&#10;mail.company.com"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Out-of-Scope Targets</label>
              <textarea
                value={scanConfig.outOfScopeTargets}
                onChange={(e) => handleInputChange("outOfScopeTargets", e.target.value)}
                placeholder="192.168.1.1 (Domain Controller)&#10;backup.company.com&#10;production-db.internal"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white resize-none"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <button
              onClick={startScan}
              disabled={isScanning}
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-800 disabled:to-blue-900 rounded-lg font-semibold transition-all duration-300 hover-neon text-white"
            >
              {isScanning ? (
                <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              )}
              {isScanning ? "Scanning..." : "Start Security Scan"}
            </button>

            <button
              onClick={saveConfiguration}
              className="flex items-center px-6 py-3 glass-effect hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 text-white"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Configuration
            </button>
          </div>
        </div>

        {/* Scan Progress */}
        {isScanning && (
          <div className="glass-effect p-6 rounded-xl border border-blue-500/20 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Scan Progress</h3>
              <span className="text-blue-400 font-mono">{Math.round(scanProgress)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-500 relative"
                style={{ width: `${scanProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Scanning network infrastructure and identifying vulnerabilities...
            </p>
          </div>
        )}

        {/* Recent Scans */}
        <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
          <h3 className="text-lg font-bold text-white mb-4">Recent Scans</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Target
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Vulnerabilities
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Last Scan
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {recentScans.map((scan) => (
                  <tr key={scan.id} className="hover:bg-blue-500/5 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {scan.target.includes(".") ? (
                          <Globe className="h-4 w-4 text-blue-400 mr-2" />
                        ) : (
                          <Server className="h-4 w-4 text-blue-400 mr-2" />
                        )}
                        <span className="text-sm font-medium text-white">{scan.target}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                          scan.status === "completed"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : scan.status === "running"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-red-500/20 text-red-400 border border-red-500/30"
                        }`}
                      >
                        {scan.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{scan.vulnerabilities}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{scan.timestamp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-400 hover:text-blue-300 mr-3 transition-colors">View</button>
                      <button className="text-gray-400 hover:text-gray-300 transition-colors">Rescan</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
