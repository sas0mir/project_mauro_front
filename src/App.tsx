//import { useState } from 'react'
import Navigation from './components/navigation'
import { Outlet } from 'react-router'
import styles from './app.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'

function App() {
  //const [count, setCount] = useState(0)
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <div className={styles.app_container}>
      <Navigation />

      <main className={classNames(
              styles.main_container,
              {
                [styles.main_bg_default]: theme === 'default',
                [styles.main_bg_earth]: theme === 'earth',
                [styles.main_bg_vintage]: theme === 'vintage',
                [styles.main_bg_cosmic]: theme === 'cosmic',
                [styles.main_bg_warm]: theme === 'warm',
                [styles.main_bg_modern]: theme === 'modern'
              }
              )}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
