import type { Config } from 'tailwindcss'

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
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
