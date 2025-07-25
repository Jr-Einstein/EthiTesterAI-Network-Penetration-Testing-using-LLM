"use client"

import { useEffect, useState } from "react"

export default function ScrollEffects() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="floating-orb w-64 h-64 -top-32 -left-32"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="floating-orb w-48 h-48 top-1/4 right-0"
          style={{ transform: `translateY(${scrollY * -0.15}px)` }}
        />
        <div
          className="floating-orb w-32 h-32 bottom-1/4 left-1/4"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Animated Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Scroll-based Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% ${50 + scrollY * 0.1}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
        }}
      />
    </>
  )
}
