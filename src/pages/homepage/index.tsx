import { useState } from 'react'
import styles from './home.module.scss'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import dayjs from 'dayjs'
import Tooltip from '../../components/tooltip'
import { FaSearch, FaPlus } from "react-icons/fa";
import Modal from '../../components/modal'

function Homepage() {

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const theme = useSelector((state: RootState) => state.settings.theme);
  const mockNewsData = useSelector((state: RootState) => state.homepageData.newsFeed);

  return (
    <div className={classNames(styles.homepage, styles[`homepage_bg_${theme}`])}>
      <div className={styles.homepage_controls}>
        {/* search input todo */}
        <div className={styles.homepage_search_container}>
          <input type="text" className={classNames(styles.homepage_search_input, styles[`homepage_border_${theme}`])} placeholder="Cercare..." />
          <FaSearch />
        </div>
        <Tooltip text="Crea un nuovo post" position='top'>
          <button
            className={classNames(styles.homepage_controls_btn, styles[`homepage_border_${theme}`])}
            onClick={() => setShowCreatePostModal(true)}><FaPlus /></button>
        </Tooltip>
      </div>
        <div className={styles.homepage_container}>
        <p style={{margin: '1.5rem', fontFamily: 'sans-serif', fontWeight: 'bold'}}>Ciao Mauro!
        Ecco un layout preliminare del sito che ho realizzato. Puoi modificare stili e colori nelle impostazioni. Il sito dovrebbe essere visualizzato normalmente su un monitor di grandi dimensioni e su un telefono cellulare. Le notizie possono essere pubblicate su questa pagina principale. Di seguito un esempio di notizia: a sinistra la foto della notizia, a destra la sua descrizione.</p>
        </div>
        {mockNewsData ? mockNewsData.map(dItem => {
          return <div className={styles.homepage_container}>
          <img src={dItem.img_url} />
          <div className={styles.homepage_container_content}>
              <h4 className={styles.homepage_feed_source}>{dItem.source}</h4>
              <h2 className={styles.homepage_feed_title}>{dItem.title}</h2>
              <p className={styles.homepage_feed_preview}>{dItem.content.substring(0, 50) + '...'}</p>
              <p className={styles.homepage_feed_footer}>{`${dayjs(dItem.date).format('DD.MM.YYYY')}${dItem.author ? ' | ' + dItem.author : ''}`}</p>
          </div>
        </div>
        }) : null}
        <Modal isOpen={showCreatePostModal} onClose={() => setShowCreatePostModal(false)}>
          <form>
            <h1>Test form</h1>
            <input type="text" />
            <input type="submit" />
          </form>
        </Modal>
    </div>
  )
}

export default Homepage
