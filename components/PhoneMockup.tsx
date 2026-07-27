'use client'

import { motion } from 'framer-motion'

const PhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Phone Frame */}
      <div className="w-80 bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        {/* Screen */}
        <div className="w-full bg-gradient-to-br from-primary/20 to-dark rounded-[2.5rem] p-1">
          <div className="bg-dark rounded-[2.3rem] w-full h-96 flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-500 bg-dark/50">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 py-4 overflow-hidden flex flex-col">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-sm font-bold text-primary mb-3">Bem-vindo!</div>
                <div className="text-2xl font-bold mb-2">Oi, João 👋</div>
                <div className="text-xs text-gray-400 mb-4">Sua sequência: <span className="text-accent font-bold">7 dias 🔥</span></div>
              </motion.div>

              {/* Card */}
              <div className="bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl p-3 mb-3 border border-primary/50">
                <div className="text-xs text-gray-400 mb-1">Próximo Treino</div>
                <div className="text-sm font-bold">Peito e Tríceps</div>
                <div className="text-xs text-gray-500">19h • Centro</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-secondary rounded-lg p-2 text-center text-xs">
                  <div className="text-primary font-bold">12</div>
                  <div className="text-gray-500">Pontos</div>
                </div>
                <div className="bg-secondary rounded-lg p-2 text-center text-xs">
                  <div className="text-accent font-bold">4º</div>
                  <div className="text-gray-500">Ranking</div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-gray-800 px-2 py-2 flex justify-around text-xs">
              <button className="flex flex-col items-center gap-1 text-primary">
                <span>🏠</span>
                <span className="text-xs">Home</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
                <span>💪</span>
                <span className="text-xs">Treino</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
                <span>💬</span>
                <span className="text-xs">IA</span>
              </button>
              <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-white transition">
                <span>👤</span>
                <span className="text-xs">Perfil</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 -z-10"></div>
    </motion.div>
  )
}

export default PhoneMockup
