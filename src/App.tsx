//import { useState } from 'react'
import Navigation from './components/navigation'
import { Outlet } from 'react-router'
import styles from './app.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'

function App() {
  
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <div className={styles.app_container}>
      <Navigation />

      <main className={classNames(styles.main_container, styles[`main_bg_${theme}`])}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
