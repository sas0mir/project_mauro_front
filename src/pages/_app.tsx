import '@/styles/globals.css'
import { Limelight, Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'
import { useReportWebVitals } from 'next/web-vitals'

const limelight = Limelight({ subsets: ['latin'], weight: '400', variable: '--font-limelight' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export default function App({ Component, pageProps }: AppProps) {

  //todo analytics
  useReportWebVitals((metric) => {
    switch (metric.name) {
      case 'FCP': {
        // handle FCP results
      }
      case 'LCP': {
        // handle LCP results
      }
      case 'FID': {
        // handle LCP results
      }
      // ...
    }
  })

  return (
    <main className={`app_container ${montserrat.variable} ${limelight.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}