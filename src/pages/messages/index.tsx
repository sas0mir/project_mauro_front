//import { useState } from 'react'
import styles from './messages.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

function Messages() {

    const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <div className={classNames(
        styles.cabinet_page,
        {
            [styles.cabinet_bg_default]: theme === 'default',
            [styles.cabinet_bg_earth]: theme === 'earth',
            [styles.cabinet_bg_vintage]: theme === 'vintage',
            [styles.cabinet_bg_cosmic]: theme === 'cosmic',
            [styles.cabinet_bg_warm]: theme === 'warm',
            [styles.cabinet_bg_modern]: theme === 'modern'
        }
        )}>
        <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>Messaggi</h1>
        <div className={styles.messages_container}>
            <aside className={styles.messages_left}>
                <p>Mario Marocco</p>
                <p>Maria Avgustina</p>
                <p>Antonia Buono</p>
                <p>Marko Stacchi</p>
                <p>Mario Alonso</p>
            </aside>
            <div className={styles.messages_right}>
                <div className={styles.chat}>
                    <p className={styles.left}>Ciao! Come stai?</p>
                    <p className={styles.right}>Ciao, tutto bene. E tu?</p>
                    <p className={styles.left}>Sono trovato nuovo lavoro</p>
                    <p className={styles.right}>Che bravo!</p>
                    <p className={styles.left}>Grazie</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Messages
