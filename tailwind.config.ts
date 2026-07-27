import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        dark: '#0A0A0A',
        secondary: '#1F2937',
        accent: '#8B5CF6',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #6D28D9 0%, #0A0A0A 100%)',
        'gradient-dark': 'radial-gradient(circle at top right, #6D28D9 0%, #0A0A0A 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui'],
      },
    },
  },
  plugins: [],
}
export default config
