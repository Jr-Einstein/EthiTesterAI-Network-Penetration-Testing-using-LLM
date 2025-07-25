"use client"

import { useState } from "react"
import { Shield, AlertTriangle, CheckCircle, Eye, Zap } from "lucide-react"
import DashboardHeader from "@/components/dashboard/header"

export default function RiskMitigationPage() {
  const [activeTab, setActiveTab] = useState("ids-ips")

  const mitigationStrategies = [
    {
      id: 1,
      title: "Update SSL Certificates",
      severity: "high",
      description: "SSL certificate for api.example.com expires in 7 days",
      recommendation: "Renew SSL certificate immediately to prevent service disruption",
      status: "pending",
    },
    {
      id: 2,
      title: "Patch Critical Vulnerabilities",
      severity: "critical",
      description: "3 critical vulnerabilities found in web servers",
      recommendation: "Apply security patches for CVE-2024-1234, CVE-2024-5678, CVE-2024-9012",
      status: "in-progress",
    },
    {
      id: 3,
      title: "Review Access Controls",
      severity: "medium",
      description: "Multiple users with excessive privileges detected",
      recommendation: "Implement principle of least privilege and review user permissions",
      status: "completed",
    },
  ]

  const socIntegrations = [
    { name: "Splunk SIEM", status: "connected", lastSync: "2 minutes ago" },
    { name: "IBM QRadar", status: "disconnected", lastSync: "1 hour ago" },
    { name: "Microsoft Sentinel", status: "connected", lastSync: "5 minutes ago" },
    { name: "Elastic Security", status: "connected", lastSync: "1 minute ago" },
  ]

  const idsIpsRules = [
    { id: 1, name: "SQL Injection Detection", enabled: true, priority: "high", alerts: 23 },
    { id: 2, name: "Brute Force Protection", enabled: true, priority: "critical", alerts: 45 },
    { id: 3, name: "DDoS Mitigation", enabled: false, priority: "medium", alerts: 0 },
    { id: 4, name: "Malware Detection", enabled: true, priority: "high", alerts: 12 },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <DashboardHeader title="Risk Mitigation" subtitle="Manage security risks and implement protective measures" />

      <main className="flex-1 overflow-y-auto p-6">
        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect p-6 rounded-xl border border-red-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Critical Risks</p>
                <p className="text-2xl font-bold text-red-400">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-yellow-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">High Risks</p>
                <p className="text-2xl font-bold text-yellow-400">12</p>
              </div>
              <Shield className="h-8 w-8 text-yellow-400" />
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border border-green-500/20 hover-neon transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Mitigated</p>
                <p className="text-2xl font-bold text-green-400">127</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-400" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8">
          <div className="glass-effect p-1 rounded-xl">
            {[
              { id: "ids-ips", label: "IDS/IPS", icon: Shield },
              { id: "soc-siem", label: "SOC/SIEM", icon: Eye },
              { id: "mitigation", label: "Mitigation Tips", icon: Zap },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-blue-500/10"
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* IDS/IPS Tab */}
        {activeTab === "ids-ips" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Intrusion Detection & Prevention System</h3>
              <p className="text-gray-400 mb-6">
                Configure and monitor IDS/IPS rules to protect your network from threats.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Active Rules</h4>
                  <div className="space-y-3">
                    {idsIpsRules.map((rule) => (
                      <div key={rule.id} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${rule.enabled ? "bg-green-500" : "bg-gray-500"}`} />
                          <div>
                            <p className="text-sm font-medium text-white">{rule.name}</p>
                            <p className="text-xs text-gray-400">Priority: {rule.priority}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-blue-400">{rule.alerts} alerts</p>
                          <label className="inline-flex items-center mt-1">
                            <input
                              type="checkbox"
                              checked={rule.enabled}
                              className="form-checkbox h-4 w-4 text-blue-600"
                              readOnly
                            />
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Configuration</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Detection Sensitivity</label>
                      <select className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white">
                        <option>High Sensitivity</option>
                        <option>Medium Sensitivity</option>
                        <option>Low Sensitivity</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Response Action</label>
                      <select className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white">
                        <option>Block & Alert</option>
                        <option>Alert Only</option>
                        <option>Log Only</option>
                      </select>
                    </div>
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg font-semibold transition-all duration-300 text-white">
                      Update Configuration
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SOC/SIEM Tab */}
        {activeTab === "soc-siem" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Security Operations Center Integration</h3>
              <p className="text-gray-400 mb-6">
                Integrate with SIEM platforms for centralized security monitoring and incident response.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">SIEM Integrations</h4>
                  <div className="space-y-3">
                    {socIntegrations.map((integration, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-3 h-3 rounded-full ${integration.status === "connected" ? "bg-green-500" : "bg-red-500"}`}
                          />
                          <div>
                            <p className="text-sm font-medium text-white">{integration.name}</p>
                            <p className="text-xs text-gray-400">Last sync: {integration.lastSync}</p>
                          </div>
                        </div>
                        <span
                          className={`px-3 py-1 text-xs rounded-full ${
                            integration.status === "connected"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {integration.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">SOC Dashboard</h4>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">1,234</p>
                        <p className="text-xs text-gray-400">Events Today</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-yellow-400">23</p>
                        <p className="text-xs text-gray-400">Active Incidents</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Critical Alerts</span>
                        <span className="text-red-400">5</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">High Priority</span>
                        <span className="text-orange-400">18</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Medium Priority</span>
                        <span className="text-yellow-400">45</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mitigation Tips Tab */}
        {activeTab === "mitigation" && (
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Risk Mitigation Strategies</h3>
              <p className="text-gray-400 mb-6">
                Recommended actions to reduce security risks and improve your security posture.
              </p>

              <div className="space-y-4">
                {mitigationStrategies.map((strategy) => (
                  <div key={strategy.id} className="p-6 bg-slate-800/50 rounded-lg border-l-4 border-l-blue-500">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="text-lg font-semibold text-white">{strategy.title}</h4>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              strategy.severity === "critical"
                                ? "bg-red-500/20 text-red-400"
                                : strategy.severity === "high"
                                  ? "bg-orange-500/20 text-orange-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {strategy.severity}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{strategy.description}</p>
                        <div className="bg-blue-500/10 p-3 rounded-lg">
                          <p className="text-sm text-blue-400">
                            <strong>Recommendation:</strong> {strategy.recommendation}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`ml-4 px-3 py-1 text-xs rounded-full ${
                          strategy.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : strategy.status === "in-progress"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {strategy.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Best Practices */}
            <div className="glass-effect p-6 rounded-xl border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Security Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Network Security</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Implement network segmentation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Use VPNs for remote access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Regular firewall rule reviews</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Monitor network traffic</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Access Control</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Implement multi-factor authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Principle of least privilege</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Regular access reviews</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <span>Strong password policies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
