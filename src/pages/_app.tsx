import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import Navigation from '../components/navigation'
import { useSelector } from 'react-redux'
import type { RootState } from '../store/store'
import classNames from 'classnames'
import styles from '../pages/app.module.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <Provider store={store}>
      <div className={styles.app_container}>
        <Navigation />
        <main className={classNames(styles.main_container, styles[`main_bg_${theme}`])}>
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  )
}