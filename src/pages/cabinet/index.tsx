//import { useState } from 'react'
import styles from './cabinet.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { LuUsers } from "react-icons/lu";

function Cabinet() {

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
        <h1 style={{fontSize: '30pt', fontWeight: 'bolder', color: 'black', margin: '1rem'}}>La tua pagina personale</h1>
        <div className={styles.cabinet_container}>
            <img src='https://diocesiluceratroia.it/wp-content/uploads/sites/2/2019/06/Sacro-Cuore-di-Gesù-1-800x437.jpg' />
            <div className={styles.cabinet_container_content}>
                <p>Test Nome</p>
                <p>Test Cognome</p>
                <p>Altre dati</p>
            </div>
        </div>
        <div className={styles.cabinet_container}>
            <LuUsers />
            <div className={styles.cabinet_container_content}>
                <p>test text</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, maxime repellendus. Maiores porro voluptas modi aut eveniet doloribus optio laboriosam blanditiis doloremque quasi? Commodi veniam illum voluptas ut, dolorum veritatis.</p>
            </div>
        </div>
    </div>
  )
}

export default Cabinet
