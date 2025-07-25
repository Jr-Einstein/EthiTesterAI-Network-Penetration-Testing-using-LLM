"use client"

import { Shield, Users, Target, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import CursorTrail from "@/components/cursor-trail"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <CursorTrail />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 neon-text">
                EthiTesterAI
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're revolutionizing network security testing with AI-powered penetration testing and continuous
              vulnerability assessment. Our mission is to make advanced security testing accessible to organizations of
              all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Traditional penetration testing is slow, expensive, and quickly becomes outdated. We believe that every
                organization deserves continuous, intelligent security testing that adapts to their evolving
                infrastructure.
              </p>
              <p className="text-gray-300 mb-8">
                EthiTesterAI combines the expertise of seasoned security professionals with cutting-edge AI to deliver
                automated penetration testing that's both comprehensive and actionable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10K+</div>
                  <div className="text-sm text-gray-400">Networks Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring</div>
                </div>
              </div>
            </div>
            <div className="gradient-border hover-neon">
              <div className="gradient-border-content p-8">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="EthiTesterAI Team"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Security First",
                desc: "We prioritize the security and privacy of our clients' data above all else.",
              },
              {
                icon: Target,
                title: "Precision",
                desc: "Our AI delivers accurate, actionable insights without overwhelming noise.",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We work closely with security teams to enhance their capabilities.",
              },
              {
                icon: Award,
                title: "Excellence",
                desc: "We continuously improve our platform to stay ahead of emerging threats.",
              },
            ].map((value, index) => (
              <div key={index} className="text-center group hover-neon">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 h-full">
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4 animate-float" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">Security experts and AI researchers working together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "CEO & Co-Founder",
                bio: "Former CISO with 15+ years in cybersecurity. Led security teams at Fortune 500 companies.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Rodriguez",
                role: "CTO & Co-Founder",
                bio: "AI researcher and former penetration tester. PhD in Machine Learning from Stanford.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Marcus Johnson",
                role: "Head of Security Research",
                bio: "Ethical hacker and security researcher. Discovered vulnerabilities in major platforms.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Zhang",
                role: "VP of Engineering",
                bio: "Full-stack engineer with expertise in distributed systems and cloud security.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                role: "Head of AI/ML",
                bio: "Machine learning expert specializing in anomaly detection and threat intelligence.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Lisa Thompson",
                role: "Head of Customer Success",
                bio: "Customer success leader helping organizations maximize their security posture.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="group hover-neon">
                <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-300">Key milestones in our mission to revolutionize network security</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>

            <div className="space-y-12">
              {[
                {
                  year: "2022",
                  title: "Company Founded",
                  desc: "EthiTesterAI was founded by security veterans with a vision to automate penetration testing.",
                },
                {
                  year: "2023",
                  title: "AI Engine Launch",
                  desc: "Released our first AI-powered vulnerability assessment engine with machine learning capabilities.",
                },
                {
                  year: "2023",
                  title: "Series A Funding",
                  desc: "Raised $15M Series A to accelerate product development and team expansion.",
                },
                {
                  year: "2024",
                  title: "Enterprise Platform",
                  desc: "Launched enterprise-grade platform with advanced reporting and compliance features.",
                },
                {
                  year: "2024",
                  title: "Global Expansion",
                  desc: "Expanded to serve customers across North America, Europe, and Asia-Pacific.",
                },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 hover-neon">
                      <div className="text-blue-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-950 relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to experience the future of network security testing? Let's secure your infrastructure together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-all hover-neon group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-blue-500 hover:bg-blue-500/10 rounded-lg text-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
