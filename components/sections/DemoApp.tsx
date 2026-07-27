'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import MobileAppDemo from '@/components/MobileAppDemo'

const DemoApp = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="demo-app" ref={ref} className="py-20 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Demo Interativa - <span className="text-primary">Visão do Aluno</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Explore como funciona o app na perspectiva do seu aluno
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center min-h-[600px]"
        >
          <MobileAppDemo />
        </motion.div>
      </div>
    </section>
  )
}

export default DemoApp
