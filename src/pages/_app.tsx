import '@/styles/globals.css'
import { Limelight, Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import Navigation from '../components/navigation'
import type { RootState } from '../store/store'

const limelight = Limelight({ subsets: ['latin'], weight: '400', variable: '--font-limelight' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`app_container ${montserrat.variable} ${limelight.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}