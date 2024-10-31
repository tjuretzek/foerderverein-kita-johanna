import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/footer.png')",
      },
      colors: {
        background: '#FFF',
        green: '#7AB542',
        'green-dark': '#048242',
        orange: '#EF8221',
        'orange-dark': '#E86124',
        primary: '#666666',
        secondary: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Futura', 'sans-serif'],
        tally: ['Tally', 'sans-serif'],
      },
      fontSize: {
        sm: ['16px', '18px'],
        base: ['20px', '26px'],
        lg: ['38px', '44px'],
        xl: ['48px', '64px'],
      },
      height: {
        25: '100px',
        page: 'calc(100dvh - 100px)',
      },
      margin: {
        25: '100px',
      },
      minHeight: {
        page: 'calc(100dvh - 100px)',
      },
      padding: {
        15: '60px',
        25: '100px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.gradient-input-label': {
          background: 'linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 50%)',
        },
      })
    }),
  ],
}
export default config
