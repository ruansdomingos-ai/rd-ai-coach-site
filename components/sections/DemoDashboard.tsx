'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DashboardDemo from '@/components/DashboardDemo'

const DemoDashboard = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

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
            Demo do Painel - <span className="text-primary">Visão do Gestor</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Controle total da sua academia em um só lugar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <DashboardDemo />
        </motion.div>
      </div>
    </section>
  )
}

export default DemoDashboard
