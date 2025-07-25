"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Shield } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 hover-neon">
            <Shield className="h-8 w-8 text-blue-400" />
            <span className="text-xl font-bold neon-text">EthiTesterAI</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="hover:text-blue-400 transition-colors">
                Products
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/login" className="hover:text-blue-400 transition-colors">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors hover-neon"
              >
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 hover:text-blue-400">
              Home
            </Link>
            <Link href="/products" className="block px-3 py-2 hover:text-blue-400">
              Products
            </Link>
            <Link href="/about" className="block px-3 py-2 hover:text-blue-400">
              About
            </Link>
            <Link href="/login" className="block px-3 py-2 hover:text-blue-400">
              Login
            </Link>
            <Link href="/register" className="block px-3 py-2 bg-blue-600 rounded-lg">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
