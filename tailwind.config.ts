import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        sm: ['14px', '18px'],
        base: ['16px', '20px'],
        lg: ['38px', '32px'],
        xl: ['48px', '64px'],
      },
      padding: {
        15: '60px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
