'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const ROICalculator = () => {
  const [students, setStudents] = useState(300)
  const [monthlyTicket, setMonthlyTicket] = useState(120)
  const [churnRate, setChurnRate] = useState(8)
  const [showResults, setShowResults] = useState(false)

  // Calculations
  const monthlyChurn = Math.floor((students * churnRate) / 100)
  const monthlyLoss = monthlyChurn * monthlyTicket * 12 // 12 months lost per cancellation
  const yearlyLoss = monthlyLoss * 12
  const recoveryRate = 0.3 // 30% recovery
  const recoveryGain = yearlyLoss * recoveryRate
  const costAnnual = 45000 // Annual platform cost
  const netProfit = recoveryGain - costAnnual
  const roi = ((recoveryGain - costAnnual) / costAnnual) * 100

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/50 rounded-2xl p-8">
        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Students Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-sm font-bold text-gray-300 mb-3">
              Nº de Alunos Ativos
            </label>
            <input
              type="range"
              min="50"
              max="1000"
              step="10"
              value={students}
              onChange={(e) => setStudents(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="text-2xl font-bold text-primary mt-2">{students} alunos</div>
          </motion.div>

          {/* Ticket Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label className="block text-sm font-bold text-gray-300 mb-3">
              Ticket Médio
            </label>
            <input
              type="range"
              min="50"
              max="500"
              step="10"
              value={monthlyTicket}
              onChange={(e) => setMonthlyTicket(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="text-2xl font-bold text-accent mt-2">R$ {monthlyTicket}</div>
          </motion.div>

          {/* Churn Rate Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-sm font-bold text-gray-300 mb-3">
              % Cancelamento/Mês
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="0.5"
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="text-2xl font-bold text-red-500 mt-2">{churnRate}%</div>
          </motion.div>
        </div>

        {/* Calculate Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={handleCalculate}
          className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg mb-8"
        >
          💰 Calcular Perdas
        </motion.button>

        {/* Results */}
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-red-500/20 to-transparent border border-red-500/50 rounded-xl p-6 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Perda por Cancelamento</p>
                <h3 className="text-3xl font-bold text-red-400 mb-1">
                  R$ {(monthlyLoss / 100).toLocaleString('pt-BR')}
                </h3>
                <p className="text-xs text-gray-500">/mês</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/50 rounded-xl p-6 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Perda por Inadimplência</p>
                <h3 className="text-3xl font-bold text-yellow-400 mb-1">
                  R$ {(monthlyLoss * 0.5 / 100).toLocaleString('pt-BR')}
                </h3>
                <p className="text-xs text-gray-500">/mês (estimado)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/50 rounded-xl p-6 text-center"
              >
                <p className="text-gray-400 text-sm mb-2">Perda Total/Ano</p>
                <h3 className="text-3xl font-bold text-red-500 mb-1">
                  R$ {(yearlyLoss / 100).toLocaleString('pt-BR')}
                </h3>
                <p className="text-xs text-gray-500">Calculado acima</p>
              </motion.div>
            </div>

            {/* Recovery Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-xl p-6 text-center"
            >
              <p className="text-gray-300 text-lg mb-2">🎯 O RD AI COACH recupera</p>
              <h2 className="text-4xl font-bold text-accent mb-3">
                {(recoveryRate * 100).toFixed(0)}%
              </h2>
              <p className="text-2xl font-bold text-green-400 mb-2">
                +R$ {(recoveryGain / 100).toLocaleString('pt-BR')}/ano
              </p>
              <p className="text-gray-400 text-sm">pra você</p>
            </motion.div>

            {/* ROI Final */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`bg-gradient-to-r ${
                netProfit > 0
                  ? 'from-green-500/20 to-accent/20 border border-green-500/50'
                  : 'from-yellow-500/20 to-orange-500/20 border border-yellow-500/50'
              } rounded-xl p-6 text-center`}
            >
              <p className="text-gray-300 text-lg mb-3">💡 Resultado Final</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Ganho com recuperação: R$ {(recoveryGain / 100).toLocaleString('pt-BR')}</p>
                <p className="text-sm text-gray-400">Custo anual da plataforma: R$ {(costAnnual / 100).toLocaleString('pt-BR')}</p>
                <h3 className="text-3xl font-bold text-green-400 mt-3">
                  Lucro: R$ {(netProfit / 100).toLocaleString('pt-BR')}/ano
                </h3>
                <p className="text-sm text-gray-400 mt-2">ROI: {roi.toFixed(0)}%</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              onClick={() => window.open('https://calendly.com', '_blank')}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold py-4 rounded-lg transition-all duration-300 text-lg"
            >
              🚀 Quero Uma Demonstração Grátis
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default ROICalculator
