import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EthiTesterAI - Advanced Network Penetration Testing",
  description: "AI-powered cybersecurity platform for ethical penetration testing and vulnerability assessment",
  keywords: "penetration testing, cybersecurity, AI, vulnerability assessment, network security",
  authors: [{ name: "EthiTesterAI Team" }],
  creator: "Project Societe Generale",
  publisher: "EthiTesterAI",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0ea5e9",
  openGraph: {
    title: "EthiTesterAI - Advanced Network Penetration Testing",
    description: "AI-powered cybersecurity platform for ethical penetration testing",
    type: "website",
    locale: "en_US",
    siteName: "EthiTesterAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "EthiTesterAI - Advanced Network Penetration Testing",
    description: "AI-powered cybersecurity platform for ethical penetration testing",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable} font-sans antialiased`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
