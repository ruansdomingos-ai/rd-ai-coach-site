'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ROICalculator from '@/components/ROICalculator'

const Calculator = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section ref={ref} className="py-20 bg-gradient-dark relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Descubra o <span className="text-primary">ROI</span> da Sua Academia
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Simule em 10 segundos quanto dinheiro tem parado na sua academia
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <ROICalculator />
        </motion.div>
      </div>
    </section>
  )
}

export default Calculator
