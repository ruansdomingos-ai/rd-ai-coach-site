'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const DashboardDemo = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const chartData = [
    { day: 'Seg', value: 32000 },
    { day: 'Ter', value: 38000 },
    { day: 'Qua', value: 35000 },
    { day: 'Qui', value: 42000 },
    { day: 'Sex', value: 39000 },
    { day: 'Sab', value: 44000 },
    { day: 'Dom', value: 42500 },
  ]

  const atRiskStudents = [
    { name: 'Carlos S.', days: '4 dias sem vir', status: '🔴' },
    { name: 'Marina P.', days: '3 dias sem vir', status: '🟡' },
    { name: 'Rafael T.', days: '2 dias sem vir', status: '🟡' },
  ]

  const cards = [
    {
      title: 'Alunos em Risco',
      value: '15',
      subtitle: 'últimos 7 dias',
      color: 'from-red-500/20',
      icon: '⚠️',
      details: atRiskStudents,
    },
    {
      title: 'Faturamento do Mês',
      value: 'R$ 42.500',
      subtitle: '+12% vs mês anterior',
      color: 'from-green-500/20',
      icon: '💰',
      chart: true,
    },
    {
      title: 'Horários Mortos',
      value: '10h às 11h',
      subtitle: '8 spots vazios',
      color: 'from-yellow-500/20',
      icon: '⏰',
      action: true,
    },
    {
      title: 'Ações da IA Hoje',
      value: '23',
      subtitle: '4 alunos recuperados',
      color: 'from-blue-500/20',
      icon: '🤖',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`bg-gradient-to-br ${card.color} bg-secondary border border-gray-700 rounded-2xl p-6 hover:border-primary transition-all duration-300 cursor-pointer ${
              hoveredCard === index ? 'transform scale-105' : ''
            }`}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">{card.title}</p>
                <h3 className="text-4xl font-bold">{card.value}</h3>
                <p className="text-sm text-gray-500 mt-2">{card.subtitle}</p>
              </div>
              <span className="text-3xl">{card.icon}</span>
            </div>

            {/* Details List */}
            {card.details && (
              <div className="space-y-2 border-t border-gray-700 pt-4">
                {card.details.map((student, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{student.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{student.days}</span>
                      <span>{student.status}</span>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 bg-primary hover:bg-accent text-white font-bold py-2 rounded-lg transition text-sm">
                  Enviar WhatsApp
                </button>
              </div>
            )}

            {/* Chart */}
            {card.chart && (
              <div className="mt-4 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} hide />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #4B5563',
                        borderRadius: '8px',
                      }}
                      formatter={(value) => `R$ ${value.toLocaleString()}`}
                    />
                    <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Action Button */}
            {card.action && (
              <button className="w-full mt-4 bg-primary hover:bg-accent text-white font-bold py-2 rounded-lg transition text-sm">
                Criar Promoção Automática
              </button>
            )}
          </motion.div>
        ))}
      </div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-2xl p-8 text-center"
      >
        <p className="text-lg text-gray-200">
          💡 <span className="font-bold">Este é um exemplo fictício</span> de como o painel funciona na prática com dados reais da sua academia.
        </p>
      </motion.div>
    </div>
  )
}

export default DashboardDemo
