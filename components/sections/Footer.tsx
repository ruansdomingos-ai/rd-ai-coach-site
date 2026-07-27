'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">RD</span> AI COACH
            </h3>
            <p className="text-gray-400">O cérebro de IA para sua academia</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#demo-app" className="hover:text-primary transition">Demo do App</a></li>
              <li><a href="#" className="hover:text-primary transition">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-primary transition">Preços</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-primary transition">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition">Contato</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:contato@rdai.com" className="hover:text-primary transition">contato@rdai.com</a></li>
              <li><a href="tel:+5531973649974" className="hover:text-primary transition">(31) 97364-9974</a></li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2024 RD AI COACH. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition">Privacidade</a>
            <a href="#" className="hover:text-primary transition">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
