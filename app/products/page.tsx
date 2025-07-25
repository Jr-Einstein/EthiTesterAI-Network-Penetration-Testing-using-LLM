"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Target, Eye, Activity, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import ScrollEffects from "@/components/cursor-trail"

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("features")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      <ScrollEffects />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Simplified <span className="text-gradient">AI-Powered</span>
              <br />
              Network Breach Simulations
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Strengthen your Network Security posture and move faster than attackers with AI. Simulate real network
              threats continuously from inside your network, so you can find and fix what truly matters.
            </p>
            <Link
              href="/register"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-lg font-semibold transition-all duration-300 hover-neon"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">
                <CheckCircle className="inline h-8 w-8 text-green-400 mr-2" />
                Get Started in {"<5"} Minutes
              </h2>
              <p className="text-gray-300 mb-8">
                Launch network attack simulations without agents, delays, or complex setup. Fix network issues faster,
                with AI handling the heavy lifting.
              </p>

              <div className="space-y-4">
                {[
                  "No agent installation required",
                  "Automated vulnerability discovery",
                  "Real-time threat simulation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-blue-400 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="gradient-border hover-neon transition-all duration-500">
                <div className="gradient-border-content p-6">
                  <div className="relative">
                    <img
                      src="/images/dashboard-preview.jpg"
                      alt="Network Assessment Workflow"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Network Assessment Workflow</h3>
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Target Configuration", status: "complete" },
                      { step: 2, title: "Scope Definition", status: "complete" },
                      { step: 3, title: "Vulnerability Analysis", status: "active" },
                      { step: 4, title: "Report Generation", status: "pending" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center space-x-3 group">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110 ${
                            item.status === "complete"
                              ? "bg-green-500"
                              : item.status === "active"
                                ? "bg-blue-500 animate-pulse"
                                : "bg-gray-600"
                          }`}
                        >
                          {item.step}
                        </div>
                        <span
                          className={`transition-colors ${item.status === "active" ? "text-blue-400" : "text-gray-300 group-hover:text-blue-400"}`}
                        >
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Product Features</h2>
            <p className="text-xl text-gray-300">Everything you need for comprehensive network security testing</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="glass-effect p-1 rounded-xl">
              {[
                { id: "features", label: "Core Features" },
                { id: "integrations", label: "Integrations" },
                { id: "reporting", label: "Reporting" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-blue-500/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Activity,
                  title: "Continuous Monitoring",
                  desc: "Real-time network vulnerability assessment and threat detection",
                  image: "/images/network-security.jpg",
                },
                {
                  icon: Target,
                  title: "AI-Powered Analysis",
                  desc: "Machine learning algorithms identify complex attack patterns",
                  image: "/images/ai-security.jpg",
                },
                {
                  icon: Shield,
                  title: "Automated Remediation",
                  desc: "Intelligent suggestions for vulnerability fixes and patches",
                  image: "/images/penetration-testing.jpg",
                },
                {
                  icon: Eye,
                  title: "Attack Path Visualization",
                  desc: "Visual representation of potential attack vectors and paths",
                  image: "/images/dashboard-preview.jpg",
                },
                {
                  icon: Zap,
                  title: "Rapid Deployment",
                  desc: "Quick setup and integration with existing infrastructure",
                  image: "/images/network-security.jpg",
                },
                {
                  icon: CheckCircle,
                  title: "Compliance Ready",
                  desc: "Built-in compliance frameworks and audit trails",
                  image: "/images/team-collaboration.jpg",
                },
              ].map((feature, index) => (
                <div key={index} className="group hover-neon transition-all duration-500">
                  <div className="glass-effect p-6 rounded-xl border border-blue-500/20 h-full group-hover:border-blue-400/40">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                      <feature.icon className="absolute bottom-2 left-2 h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "integrations" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "AWS",
                "Azure",
                "Google Cloud",
                "Kubernetes",
                "Docker",
                "Jenkins",
                "Splunk",
                "Elastic",
                "Jira",
                "Slack",
                "Microsoft Teams",
                "PagerDuty",
              ].map((integration) => (
                <div
                  key={integration}
                  className="bg-slate-800/50 p-4 rounded-lg border border-blue-500/20 text-center hover-neon"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-blue-400 font-bold text-sm">{integration.slice(0, 2)}</span>
                  </div>
                  <span className="text-sm font-medium">{integration}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === "reporting" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Comprehensive Reports</h3>
                <ul className="space-y-3">
                  {[
                    "Executive Summary Dashboard",
                    "Technical Vulnerability Details",
                    "Risk Assessment Matrix",
                    "Remediation Roadmap",
                    "Compliance Status Reports",
                    "Trend Analysis & Metrics",
                  ].map((item) => (
                    <li key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20">
                <h4 className="font-bold mb-4">Sample Report Preview</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Critical Vulnerabilities:</span>
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>High Risk Issues:</span>
                    <span className="text-orange-400 font-bold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium Risk Issues:</span>
                    <span className="text-yellow-400 font-bold">28</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Security Score:</span>
                    <span className="text-green-400 font-bold">78/100</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that fits your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                period: "/month",
                features: [
                  "Up to 10 IP addresses",
                  "Basic vulnerability scanning",
                  "Email reports",
                  "Community support",
                ],
              },
              {
                name: "Professional",
                price: "$299",
                period: "/month",
                features: [
                  "Up to 100 IP addresses",
                  "Advanced AI analysis",
                  "Real-time monitoring",
                  "Priority support",
                  "Custom integrations",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                features: [
                  "Unlimited IP addresses",
                  "Full AI capabilities",
                  "Dedicated support",
                  "On-premise deployment",
                  "Custom compliance reports",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-slate-800/50 p-8 rounded-lg border ${
                  plan.popular ? "border-blue-400 hover-neon" : "border-blue-500/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular ? "bg-blue-600 hover:bg-blue-700 hover-neon" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Network?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of security professionals who trust EthiTesterAI for their network security testing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all hover-neon group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-blue-500 hover:bg-blue-500/10 rounded-lg text-lg font-semibold transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
