'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Problem = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const problems = [
    {
      icon: '📉',
      title: 'Perde Aluno',
      description: 'Alunos somem e você só descobre depois que cancelou',
      color: 'from-red-500/20 to-transparent',
    },
    {
      icon: '⏰',
      title: 'Perde Horário',
      description: 'Horários vazios dão prejuízo todo mês',
      color: 'from-yellow-500/20 to-transparent',
    },
    {
      icon: '⚙️',
      title: 'Perde Tempo',
      description: 'Recepção perde horas ligando e mandando msg',
      color: 'from-blue-500/20 to-transparent',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section ref={ref} className="py-20 bg-dark relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            O Problema e a <span className="text-primary">Solução</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Sua academia enfrenta três desafios que drenam faturamento todo mês
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-gradient-to-br ${problem.color} border border-gray-700 rounded-2xl p-8 hover:border-primary transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{problem.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/50 rounded-2xl p-10 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">A Solução</h3>
          <p className="text-xl text-gray-200">
            O <span className="text-primary font-bold">RD AI COACH</span> analisa e age sozinho 24 horas por dia. Recupera alunos, preenche horários, e economiza tempo da sua equipe.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
