'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileAppDemo = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      name: 'Home',
      icon: '🏠',
      content: (
        <div className="space-y-4">
          <div className="text-center py-4">
            <h2 className="text-3xl font-bold mb-2">Oi, João 👋</h2>
            <p className="text-gray-400">Sexta-feira, 15 de março</p>
          </div>
          <div className="bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl p-4 border border-primary/50">
            <div className="text-sm text-gray-400 mb-2">Próximo Treino</div>
            <h3 className="text-xl font-bold mb-1">Peito e Tríceps</h3>
            <p className="text-sm text-gray-500">19h • Centro</p>
          </div>
          <div className="bg-secondary rounded-2xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Sequência</p>
                <h3 className="text-2xl font-bold">7 dias 🔥</h3>
              </div>
              <div className="text-4xl">⚡</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      name: 'Treino',
      icon: '💪',
      content: (
        <div className="space-y-3">
          <h2 className="text-2xl font-bold mb-4">Peito e Tríceps</h2>
          {[
            { name: 'Supino Reto', series: '4x8', icon: '🏋️' },
            { name: 'Rosca Barra', series: '3x10', icon: '💪' },
            { name: 'Voador', series: '3x12', icon: '🔧' },
          ].map((exercise, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-secondary rounded-xl p-3 flex items-center justify-between hover:bg-secondary/80 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{exercise.icon}</span>
                <div>
                  <h4 className="font-bold">{exercise.name}</h4>
                  <p className="text-sm text-gray-400">{exercise.series}</p>
                </div>
              </div>
              <button className="bg-primary hover:bg-accent text-white px-3 py-1 rounded-lg text-sm font-bold transition">
                ▶
              </button>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      id: 2,
      name: 'Mensagens',
      icon: '💬',
      content: (
        <div className="space-y-3">
          <h2 className="text-2xl font-bold mb-4">Coach IA</h2>
          <div className="bg-secondary rounded-lg p-3">
            <div className="text-sm text-gray-400 mb-2">Coach</div>
            <p className="text-sm leading-relaxed">"Sentimos sua falta! 😢 Volte essa semana e ganhe 1 Day Use Grátis. Te espero amanhã às 19h!"</p>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 bg-primary hover:bg-accent text-white py-2 rounded-lg font-bold transition text-sm">
              Aceitar
            </button>
            <button className="flex-1 border border-gray-600 text-gray-400 py-2 rounded-lg font-bold hover:border-primary transition text-sm">
              Depois
            </button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: 'Plano',
      icon: '💳',
      content: (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Seu Plano</h2>
          <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-4 border border-accent/50">
            <h3 className="font-bold text-lg mb-2">Premium</h3>
            <p className="text-sm text-gray-400 mb-3">Vence em 5 dias</p>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div className="bg-accent h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <button className="w-full bg-accent hover:bg-primary text-white font-bold py-2 rounded-lg transition">
              Renovar com 10% OFF
            </button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="flex justify-center items-center py-8">
      {/* Phone Frame */}
      <div className="w-96 bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50 pointer-events-none"></div>

        {/* Screen */}
        <div className="bg-dark rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-500 bg-dark/50 border-b border-gray-800">
            <span>9:41</span>
            <div className="flex gap-1">📶 🔋</div>
          </div>

          {/* Content */}
          <div className="h-96 px-4 py-4 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {tabs[activeTab].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="border-t border-gray-800 px-2 py-3 flex justify-around bg-dark/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span className="text-xs font-bold">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileAppDemo
