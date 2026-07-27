import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RD AI COACH | Aumente o Faturamento da Sua Academia em 30%',
  description: 'O Cérebro de IA que Recupera Alunos, Vende Planos e Mostra Onde Você Está Perdendo Dinheiro.',
  keywords: ['academia', 'IA', 'gestão', 'SaaS', 'fitness'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-dark text-white`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
