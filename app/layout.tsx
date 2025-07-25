import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EthiTesterAI - Network Pentesting Automation Workflow",
  description: "AI-Powered Network Penetration Testing and Security Assessment Platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
