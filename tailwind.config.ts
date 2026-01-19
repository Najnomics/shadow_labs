import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'shadow-dark': '#000000',
        'shadow-dark-gray': '#0a0a0a',
        'shadow-gray': '#1a1a1a',
        'shadow-light-gray': '#2a2a2a',
        'shadow-white': '#ffffff',
        'shadow-text': '#f5f5f5',
        'shadow-text-light': '#e0e0e0',
        'shadow-text-gray': '#a0a0a0',
        'shadow-green': '#00ff88',
        'shadow-green-dark': '#00cc6a',
        'shadow-blue': '#3b82f6',
        'shadow-blue-dark': '#2563eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(245, 245, 245, 0.1)',
        'glow-green': '0 0 20px rgba(0, 255, 136, 0.2)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)',
        'minimal': '0 4px 16px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
