//import { useState } from 'react'
import styles from './friends.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

function Friends() {

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
        <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>Amici</h1>
        <div className={styles.friend_container}>
            <img src='https://diocesiluceratroia.it/wp-content/uploads/sites/2/2019/06/Sacro-Cuore-di-Gesù-1-800x437.jpg' />
            <p>Mario Giovanni</p>
        </div>
        <div className={styles.friend_container}>
            <img src='https://diocesiluceratroia.it/wp-content/uploads/sites/2/2019/06/Sacro-Cuore-di-Gesù-1-800x437.jpg' />
            <p>Maria Giovanni</p>
        </div>
        
    </div>
  )
}

export default Friends
