"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Shield, Zap, Target, Eye, Activity, CheckCircle, X, Play } from "lucide-react"
import Navbar from "@/components/navbar"
import ScrollEffects from "@/components/cursor-trail"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <ScrollEffects />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Scale Your Network Security with <span className="text-gradient">Autonomous Testing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Strengthen your defenses by continuously probing your network security with AI-powered penetration
                testing and vulnerability discovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-lg font-semibold transition-all duration-300 hover-neon"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="group inline-flex items-center px-8 py-4 glass-effect rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-blue-500/10">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </button>
              </div>
            </div>

            <div className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <div className="relative">
                <img
                  src="/images/cyber-security-hero.jpg"
                  alt="Cybersecurity Dashboard"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Security Monitoring</span>
                    </div>
                    <p className="text-xs text-gray-300">AI-powered threat detection active</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="gradient-border hover-neon transition-all duration-500">
              <div className="gradient-border-content p-8 rounded-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-blue-400" />
                    <span className="text-lg font-semibold">EthiTesterAI</span>
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-400">
                    <span className="hover:text-blue-400 transition-colors cursor-pointer">Dashboard</span>
                    <span className="hover:text-blue-400 transition-colors cursor-pointer">Reports</span>
                    <span className="hover:text-blue-400 transition-colors cursor-pointer">Settings</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Security Dashboard</h3>
                <p className="text-gray-400 mb-6">
                  Monitor your network security posture and penetration testing effectiveness.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { step: 1, title: "Target Input", desc: "IP/Domain setup", color: "bg-blue-600" },
                    { step: 2, title: "Scope Definition", desc: "In/Out of scope", color: "bg-purple-600" },
                    { step: 3, title: "AI Analysis", desc: "Vulnerability scan", color: "bg-green-600" },
                    { step: 4, title: "Report Ready", desc: "Detailed findings", color: "bg-orange-600" },
                  ].map((item, index) => (
                    <div key={item.step} className="text-center group">
                      <div
                        className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                      >
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-sm group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="glass-effect border border-green-500/30 rounded-lg p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-semibold">Network Assessment Complete 🎯</p>
                  <p className="text-sm text-gray-300 mt-1">
                    Ready for your first Penetration Test and Security Analysis?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Network Security Testing Is Broken.{" "}
              <span className="text-red-400">Noise Overload, No Real Risk Insight</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Networks change daily. Manual Penetration Testing doesn't. EthiTesterAI delivers continuous offensive
              testing, automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Old Way */}
            <div className="glass-effect p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-300">The old way</h3>
              <div className="space-y-6">
                {[
                  { title: "Noisy", desc: "Flooded with alerts, but none show what's truly exploitable. No context." },
                  {
                    title: "Outdated",
                    desc: "Pentests take weeks, and are outdated the moment your network infrastructure changes.",
                  },
                  { title: "Passive", desc: "Your security tools act like cameras, watching but never intervening." },
                  {
                    title: "Shallow",
                    desc: "Surface-level scans that miss critical attack paths and privilege escalation routes.",
                  },
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start space-x-3 group">
                    <X className="h-5 w-5 text-red-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="font-semibold text-red-400">{item.title}.</span>{" "}
                      <span className="text-gray-300">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EthiTesterAI Way */}
            <div className="gradient-border hover-neon transition-all duration-500">
              <div className="gradient-border-content p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Shield className="h-6 w-6 text-blue-400" />
                  <h3 className="text-2xl font-bold">EthiTesterAI</h3>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: "Exploitable",
                      desc: "Runs real attack chains and shows you what leads to data exfiltration.",
                    },
                    { title: "Continuous", desc: "Emulates AI-driven network attacks in real time." },
                    {
                      title: "Active",
                      desc: "Plays the role of an intelligent network attacker and pressure-tests your defenses.",
                    },
                    {
                      title: "Tested",
                      desc: "Delivers auditor-friendly reports grounded in actual simulated network attacks.",
                    },
                  ].map((item, index) => (
                    <div key={item.title} className="flex items-start space-x-3 group">
                      <CheckCircle className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="font-semibold text-blue-400">{item.title}.</span>{" "}
                        <span className="text-gray-300">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proactively Test <span className="text-gradient">Your Network Defenses</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Automate your Red Team with continuous, and autonomous network exploitation, exposing real attack paths
              from the inside so you can reduce risk at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Activity,
                title: "Continuous Network Breach Simulation",
                desc: "Run network breach simulations daily to stay ahead of evolving network threats. Uncover new network attack paths as they emerge.",
                image: "/images/network-security.jpg",
              },
              {
                icon: Target,
                title: "AI Network Red Teaming",
                desc: "Pinpoint identity misuse, privilege escalation, misconfigurations, and risky network services with GenAI that tailors its testing to your unique environment.",
                image: "/images/ai-security.jpg",
              },
              {
                icon: Zap,
                title: "Seamless Network Integration",
                desc: "Natively integrates with your network infrastructure in minutes. No agents or friction.",
                image: "/images/penetration-testing.jpg",
              },
              {
                icon: Eye,
                title: "Kill Chains Visibility",
                desc: "See the full attack path from initial compromise to data exfiltration. Understand how attackers move through your network.",
                image: "/images/dashboard-preview.jpg",
              },
              {
                icon: Shield,
                title: "Actionable Real-Time Network Insights",
                desc: "Get immediate alerts when new attack paths are discovered. Prioritize fixes based on actual exploitability.",
                image: "/images/network-security.jpg",
              },
              {
                icon: CheckCircle,
                title: "Compliance Beyond Checkboxes",
                desc: "Generate compliance reports that demonstrate actual security posture, not just configuration compliance.",
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
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/10 to-cyan-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">See EthiTesterAI in Action</h2>
          <p className="text-xl text-gray-300 mb-12">
            Watch how our AI-powered platform identifies and exploits network vulnerabilities in real-time
          </p>

          <div className="relative group cursor-pointer">
            <div className="gradient-border hover-neon transition-all duration-500">
              <div className="gradient-border-content p-2">
                <div className="relative">
                  <img
                    src="/images/dashboard-preview.jpg"
                    alt="EthiTesterAI Demo"
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Embrace Autonomous <span className="text-gradient">Network Red Teaming</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Proactively discover and remediate network attacks present in your infrastructure.{" "}
            <span className="font-semibold text-white">Ready to get started?</span>
          </p>
          <Link
            href="/register"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl text-lg font-semibold transition-all duration-300 hover-neon"
          >
            Get started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">EthiTesterAI</span>
              </div>
              <p className="text-gray-400">AI-Powered Network Penetration Testing Platform</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/blog" className="hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-blue-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="hover:text-blue-400 transition-colors">
                    API Reference
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help Center</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/support" className="hover:text-blue-400 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blue-400 transition-colors">
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 EthiTesterAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
