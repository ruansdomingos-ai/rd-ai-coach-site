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
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
