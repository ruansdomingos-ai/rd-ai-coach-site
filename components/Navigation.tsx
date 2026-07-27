'use client'

import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="bg-dark/80 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition">
          🚀 RD AI COACH
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/" className="text-gray-300 hover:text-primary transition font-medium">
            Home
          </Link>
          <Link href="/jokes" className="text-gray-300 hover:text-primary transition font-medium">
            🎭 Piadas
          </Link>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition font-bold"
          >
            Agendar
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
