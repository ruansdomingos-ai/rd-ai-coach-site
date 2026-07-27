import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import DemoApp from '@/components/sections/DemoApp'
import DemoDashboard from '@/components/sections/DemoDashboard'
import Calculator from '@/components/sections/Calculator'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-dark">
      <Hero />
      <Problem />
      <DemoApp />
      <DemoDashboard />
      <Calculator />
      <Footer />
    </main>
  )
}
