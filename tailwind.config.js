// tailwind.config.js
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-limelight)', ...fontFamily.sans],
        body: ['var(--font-montserrat)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}