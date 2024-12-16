//import { useState } from 'react'
import styles from './home.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'

function Homepage() {

  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <div className={classNames(
      styles.homepage,
      {
        [styles.homepage_bg_default]: theme === 'default',
        [styles.homepage_bg_earth]: theme === 'earth',
        [styles.homepage_bg_vintage]: theme === 'vintage',
        [styles.homepage_bg_cosmic]: theme === 'cosmic',
        [styles.homepage_bg_warm]: theme === 'warm',
        [styles.homepage_bg_modern]: theme === 'modern'
    }
      )}>
        <div className={styles.homepage_container}>
        <p style={{margin: '1.5rem', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Ciao Mauro!
        Ecco un layout preliminare del sito che ho realizzato. Puoi modificare stili e colori nelle impostazioni. Il sito dovrebbe essere visualizzato normalmente su un monitor di grandi dimensioni e su un telefono cellulare. Le notizie possono essere pubblicate su questa pagina principale. Di seguito un esempio di notizia: a sinistra la foto della notizia, a destra la sua descrizione.</p>
        </div>
      <div className={styles.homepage_container}>
        <img src='https://www.unionecoros.it/perledelcoros/wp-content/uploads/2022/06/Chiesa-di-San-Pietro-17.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Nuova chiesa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
      <div className={styles.homepage_container}>
        <img src='https://scuolasvizzera.it/wp-content/uploads/2022/06/DSCF6893-small-min-scaled.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Andiamo a scuola</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
      <div className={styles.homepage_container}>
        <img src='https://www.unionecoros.it/perledelcoros/wp-content/uploads/2022/06/Chiesa-di-San-Pietro-17.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Nuova chiesa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
      <div className={styles.homepage_container}>
        <img src='https://scuolasvizzera.it/wp-content/uploads/2022/06/DSCF6893-small-min-scaled.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Andiamo a scuola</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
      <div className={styles.homepage_container}>
        <img src='https://www.unionecoros.it/perledelcoros/wp-content/uploads/2022/06/Chiesa-di-San-Pietro-17.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Nuova chiesa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
      <div className={styles.homepage_container}>
        <img src='https://scuolasvizzera.it/wp-content/uploads/2022/06/DSCF6893-small-min-scaled.jpg' />
        <div className={styles.homepage_container_content}>
            <h3>Andiamo a scuola</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet quo provident ducimus facere quod nulla vitae atque inventore laborum? Exercitationem ipsam eos, veniam deserunt aliquid eum delectus amet? Obcaecati!</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage
