import Link from 'next/link'
import { motion } from 'framer-motion'

const Navigation = () => {
  return (
    <nav className="bg-dark border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-accent transition">
          🚀 RD AI COACH
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-300 hover:text-primary transition">
            Home
          </Link>
          <Link href="/jokes" className="text-gray-300 hover:text-primary transition">
            🎭 Piadas
          </Link>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-accent text-white px-4 py-2 rounded-lg transition">
            Agendar
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
