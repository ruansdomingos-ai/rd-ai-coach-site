'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Joke {
  id: number
  setup: string
  delivery: string
  type: string
}

interface JokeResponse {
  joke?: string
  setup?: string
  delivery?: string
  type: string
  error?: boolean
}

const JokeGenerator = () => {
  const [joke, setJoke] = useState<Joke | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [jokes, setJokes] = useState<Joke[]>([])
  const [jokeCount, setJokeCount] = useState(0)

  const fetchJoke = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any')
      const data: JokeResponse = await response.json()

      if (data.error) {
        setError('Erro ao buscar piada. Tente novamente!')
        return
      }

      const newJoke: Joke = {
        id: jokeCount + 1,
        setup: data.setup || data.joke || '',
        delivery: data.delivery || '',
        type: data.type,
      }

      setJoke(newJoke)
      setJokes([newJoke, ...jokes])
      setJokeCount(jokeCount + 1)
    } catch (err) {
      setError('Erro na conexão. Verifique sua internet!')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const clearHistory = () => {
    setJokes([])
    setJokeCount(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-dark to-secondary py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">😂 Gerador de Piadas</h1>
          <p className="text-gray-300 text-lg">Prepare-se para rir com piadas aleatórias!</p>
        </motion.div>

        {/* Main Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="w-full bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin">⏳</span>
                Carregando piada...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>🎭</span>
                Gerar Piada Aleatória
              </span>
            )}
          </button>
        </motion.div>

        {/* Error Message */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-500/20 border border-red-500/50 text-red-300 p-4 rounded-xl mb-8"
          >
            ⚠️ {error}
          </motion.div>
        )}

        {/* Joke Display */}
        {joke && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary/50 to-secondary/30 border-2 border-accent/50 rounded-2xl p-8 mb-8 shadow-xl"
          >
            <div className="mb-4">
              <span className="bg-accent/30 text-accent px-3 py-1 rounded-full text-sm font-bold">
                {joke.type === 'twopart' ? '📖 Duas Partes' : '⚡ Uma Linha'}
              </span>
            </div>

            <p className="text-gray-100 text-xl mb-4 leading-relaxed">{joke.setup}</p>

            {joke.delivery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-accent/20 border-l-4 border-accent pl-4 py-3"
              >
                <p className="text-accent font-bold text-lg italic">
                  💥 {joke.delivery}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Stats */}
        {jokeCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <p className="text-gray-400 text-sm">
              Você já viu <span className="text-accent font-bold">{jokeCount}</span> piadas!
            </p>
          </motion.div>
        )}

        {/* History Section */}
        {jokes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary/30 border border-gray-700 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">📚 Histórico ({jokes.length})</h2>
              <button
                onClick={clearHistory}
                className="bg-red-500/20 hover:bg-red-500/30 text-red-300 px-4 py-2 rounded-lg text-sm font-bold transition"
              >
                Limpar
              </button>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {jokes.map((j, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-dark/50 border border-gray-700 rounded-lg p-4 hover:border-accent/50 transition"
                >
                  <p className="text-sm text-gray-400 mb-2">#{j.id}</p>
                  <p className="text-gray-200 text-sm leading-relaxed">{j.setup}</p>
                  {j.delivery && (
                    <p className="text-accent text-sm italic mt-2">→ {j.delivery}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>API: JokeAPI v2 • Piadas ilimitadas • Gêneros variados</p>
        </motion.div>
      </div>
    </div>
  )
}

export default JokeGenerator
